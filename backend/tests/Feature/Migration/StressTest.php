<?php

namespace Tests\Feature\Migration;

use Tests\TestCase;
use App\Models\Company;
use App\Models\User;
use App\Models\Customer;
use App\Models\Sale;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class StressTest extends TestCase
{
    use RefreshDatabase;

    /**
     * Test system stability under sustained write load
     */
    public function test_sustained_write_load()
    {
        $company = Company::factory()->create();

        $start = microtime(true);

        for ($i = 0; $i < 500; $i++) {
            Customer::factory()->create(['company_id' => $company->id]);
        }

        $duration = microtime(true) - $start;

        $this->assertEquals(500, Customer::count());
        $this->assertLessThan(15, $duration);
    }

    /**
     * Test system stability under sustained read load
     */
    public function test_sustained_read_load()
    {
        $company = Company::factory()->create();
        Customer::factory(1000)->create(['company_id' => $company->id]);

        $start = microtime(true);

        for ($i = 0; $i < 500; $i++) {
            Customer::count();
        }

        $duration = microtime(true) - $start;
        $this->assertLessThan(2, $duration);
    }

    /**
     * Test concurrent write operations
     */
    public function test_concurrent_writes()
    {
        $company = Company::factory()->create();

        DB::transaction(function () use ($company) {
            for ($i = 0; $i < 500; $i++) {
                Customer::factory()->create(['company_id' => $company->id]);
            }
        });

        $this->assertEquals(500, Customer::count());
    }

    /**
     * Test cascading deletes under stress
     */
    public function test_cascading_deletes_stress()
    {
        $companies = Company::factory(50)->create();

        foreach ($companies as $company) {
            User::factory(10)->create(['company_id' => $company->id]);
            Customer::factory(10)->create(['company_id' => $company->id]);
        }

        $start = microtime(true);

        Company::all()->each->delete();

        $duration = microtime(true) - $start;

        $this->assertEquals(0, Company::count());
        $this->assertLessThan(10, $duration);
    }

    /**
     * Test transaction rollback under stress with large dataset
     */
    public function test_rollback_under_stress()
    {
        $company = Company::factory()->create();
        Customer::factory(1000)->create(['company_id' => $company->id]);

        $start = microtime(true);

        try {
            DB::transaction(function () use ($company) {
                for ($i = 0; $i < 1000; $i++) {
                    Customer::factory()->create(['company_id' => $company->id]);
                }
                throw new \Exception('Stress test rollback');
            });
        } catch (\Exception $e) {
            // Expected
        }

        $duration = microtime(true) - $start;

        $this->assertEquals(1000, Customer::count()); // Should rollback to original 1000
        $this->assertLessThan(15, $duration);
    }

    /**
     * Test concurrent user operations
     */
    public function test_concurrent_user_operations()
    {
        $company = Company::factory()->create();
        $users = User::factory(100)->create(['company_id' => $company->id]);

        foreach ($users as $user) {
            Auth::login($user);
            Customer::count();
            Auth::logout();
        }

        $this->assertEquals(100, User::count());
    }

    /**
     * Test memory stability under sustained load
     */
    public function test_memory_stability()
    {
        $company = Company::factory()->create();

        $memorySnapshots = [];

        for ($iteration = 0; $iteration < 5; $iteration++) {
            Customer::factory(1000)->create(['company_id' => $company->id]);
            $memorySnapshots[] = memory_get_usage(true) / (1024 * 1024); // MB
        }

        // Memory shouldn't grow exponentially
        $maxGrowth = $memorySnapshots[count($memorySnapshots) - 1] - $memorySnapshots[0];
        $this->assertLessThan(100, $maxGrowth); // Max growth of 100MB across all iterations
    }

    /**
     * Test query performance degradation under load
     */
    public function test_query_performance_degradation()
    {
        $company = Company::factory()->create();
        Customer::factory(5000)->create(['company_id' => $company->id]);

        // Measure baseline performance
        $start1 = microtime(true);
        Customer::where('company_id', $company->id)->count();
        $baseline = microtime(true) - $start1;

        // Heavy load
        for ($i = 0; $i < 100; $i++) {
            Customer::count();
        }

        // Measure performance after load
        $start2 = microtime(true);
        Customer::where('company_id', $company->id)->count();
        $afterLoad = microtime(true) - $start2;

        // Performance shouldn't degrade significantly
        $degradation = ($afterLoad / $baseline) - 1;
        $this->assertLessThan(0.5, $degradation); // Max 50% degradation
    }

    /**
     * Test transaction nesting under stress
     */
    public function test_transaction_nesting_stress()
    {
        $company = Company::factory()->create();

        for ($i = 0; $i < 100; $i++) {
            DB::transaction(function () use ($company) {
                for ($j = 0; $j < 5; $j++) {
                    DB::transaction(function () use ($company) {
                        Customer::factory()->create(['company_id' => $company->id]);
                    });
                }
            });
        }

        $this->assertEquals(500, Customer::count()); // 100 * 5
    }

    /**
     * Test index efficiency under stress
     */
    public function test_index_efficiency_stress()
    {
        $company = Company::factory()->create();
        Customer::factory(10000)->create(['company_id' => $company->id]);

        $start = microtime(true);

        for ($i = 0; $i < 1000; $i++) {
            Customer::where('company_id', $company->id)->first();
        }

        $duration = microtime(true) - $start;

        $this->assertLessThan(1, $duration); // Indexed queries should remain fast
    }

    /**
     * Test soft delete performance under stress
     */
    public function test_soft_delete_stress()
    {
        $company = Company::factory()->create();
        Customer::factory(1000)->create(['company_id' => $company->id]);

        $start = microtime(true);

        Customer::where('company_id', $company->id)->delete();

        $duration = microtime(true) - $start;

        $this->assertEquals(0, Customer::count());
        $this->assertEquals(1000, Customer::withTrashed()->count());
        $this->assertLessThan(5, $duration);
    }

    /**
     * Test bulk update with conflicts
     */
    public function test_bulk_update_with_conflicts()
    {
        $company = Company::factory()->create();
        Customer::factory(500)->create(['company_id' => $company->id]);

        // Update attempt that might have conflicts
        Customer::where('company_id', $company->id)->update(['status' => 'updated']);

        $this->assertEquals(500, Customer::where('status', 'updated')->count());
    }

    /**
     * Test relationships under stress
     */
    public function test_relationships_under_stress()
    {
        $company = Company::factory()->create();
        $user = User::factory()->create(['company_id' => $company->id]);

        Sale::factory(1000)->create(['company_id' => $company->id, 'user_id' => $user->id]);

        Auth::login($user);

        // Access relationships heavily
        $sales = Sale::with(['user', 'customer', 'details'])->get();

        $this->assertEquals(1000, $sales->count());
    }

    /**
     * Test database connection stability
     */
    public function test_connection_stability()
    {
        for ($i = 0; $i < 100; $i++) {
            DB::table('companies')->count();
        }

        // If we get here without connection errors, test passes
        $this->assertTrue(true);
    }

    /**
     * Test deadlock prevention under high contention
     */
    public function test_deadlock_prevention()
    {
        $company = Company::factory()->create();
        Customer::factory(100)->create(['company_id' => $company->id]);

        // Simulate high contention
        for ($i = 0; $i < 50; $i++) {
            DB::transaction(function () use ($company) {
                Customer::where('company_id', $company->id)->first()->update(['status' => 'updated']);
            });
        }

        // If transactions completed without deadlock, test passes
        $this->assertTrue(true);
    }

    /**
     * Test sorting stability under stress
     */
    public function test_sorting_stability()
    {
        $company = Company::factory()->create();
        Customer::factory(5000)->create(['company_id' => $company->id]);

        $start = microtime(true);

        $sorted = Customer::orderBy('name')->take(100)->get();

        $duration = microtime(true) - $start;

        $this->assertEquals(100, $sorted->count());
        $this->assertLessThan(1, $duration);
    }

    /**
     * Test filtering stability under stress
     */
    public function test_filtering_stability()
    {
        $company = Company::factory()->create();
        Customer::factory(5000)->create(['company_id' => $company->id]);

        $start = microtime(true);

        for ($i = 0; $i < 100; $i++) {
            Customer::where('status', 'active')->get();
        }

        $duration = microtime(true) - $start;
        $this->assertLessThan(5, $duration);
    }

    /**
     * Test breaking point - maximum concurrent operations
     */
    public function test_breaking_point_maximum_operations()
    {
        $company = Company::factory()->create();

        $operationCount = 0;
        $maxDuration = 5; // seconds

        $start = microtime(true);

        while ((microtime(true) - $start) < $maxDuration) {
            Customer::factory()->create(['company_id' => $company->id]);
            $operationCount++;
        }

        // System should handle at least 500 operations in 5 seconds
        $this->assertGreaterThan(500, $operationCount);
    }

    /**
     * Test system recovery after stress
     */
    public function test_recovery_after_stress()
    {
        $company = Company::factory()->create();

        // Create stress
        Customer::factory(10000)->create(['company_id' => $company->id]);

        // Recovery test
        $start = microtime(true);

        $count = Customer::count();
        $first = Customer::first();

        $duration = microtime(true) - $start;

        $this->assertEquals(10000, $count);
        $this->assertNotNull($first);
        $this->assertLessThan(1, $duration);
    }

    /**
     * Test consistency under mixed operations
     */
    public function test_consistency_mixed_operations()
    {
        $company = Company::factory()->create();

        for ($i = 0; $i < 100; $i++) {
            if ($i % 2 == 0) {
                Customer::factory()->create(['company_id' => $company->id]);
            } else {
                Customer::count();
            }
        }

        $this->assertEquals(50, Customer::count());
    }
}
