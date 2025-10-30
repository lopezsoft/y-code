<?php

namespace Tests\Feature\Migration;

use Tests\TestCase;
use App\Models\Company;
use App\Models\User;
use App\Models\Customer;
use App\Models\Sale;
use App\Models\SaleDetail;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Auth;

class LoadTest extends TestCase
{
    use RefreshDatabase;

    /**
     * Test 100 concurrent logins performance
     */
    public function test_100_concurrent_logins()
    {
        $company = Company::factory()->create();
        $users = User::factory(100)->create(['company_id' => $company->id]);

        $start = microtime(true);

        foreach ($users as $user) {
            Auth::login($user);
            Auth::logout();
        }

        $duration = microtime(true) - $start;

        $this->assertLessThan(5, $duration); // Should complete in less than 5 seconds
    }

    /**
     * Test 1000 customer records insertion
     */
    public function test_1000_customers_insertion()
    {
        $company = Company::factory()->create();

        $start = microtime(true);

        Customer::factory(1000)->create(['company_id' => $company->id]);

        $duration = microtime(true) - $start;

        $this->assertEquals(1000, Customer::count());
        $this->assertLessThan(10, $duration); // Should complete in less than 10 seconds
    }

    /**
     * Test 10000 records insertion performance
     */
    public function test_10000_records_insertion()
    {
        $company = Company::factory()->create();

        $start = microtime(true);

        Customer::factory(10000)->create(['company_id' => $company->id]);

        $duration = microtime(true) - $start;

        $this->assertEquals(10000, Customer::count());
        $this->assertLessThan(30, $duration); // Should complete in less than 30 seconds
    }

    /**
     * Test bulk data retrieval with 10K records
     */
    public function test_bulk_retrieval_10k_records()
    {
        $company = Company::factory()->create();
        Customer::factory(10000)->create(['company_id' => $company->id]);

        $start = microtime(true);

        $customers = Customer::all();

        $duration = microtime(true) - $start;

        $this->assertEquals(10000, $customers->count());
        $this->assertLessThan(2, $duration); // Should complete in less than 2 seconds
    }

    /**
     * Test pagination with 10K records
     */
    public function test_pagination_with_10k_records()
    {
        $company = Company::factory()->create();
        Customer::factory(10000)->create(['company_id' => $company->id]);

        $start = microtime(true);

        $page = Customer::paginate(50);

        $duration = microtime(true) - $start;

        $this->assertEquals(200, $page->lastPage());
        $this->assertLessThan(1, $duration);
    }

    /**
     * Test complex query with joins on large dataset
     */
    public function test_complex_query_large_dataset()
    {
        $company = Company::factory()->create();
        $user = User::factory()->create(['company_id' => $company->id]);

        Customer::factory(1000)->create(['company_id' => $company->id]);
        Sale::factory(5000)->create(['company_id' => $company->id, 'user_id' => $user->id]);

        Auth::login($user);

        $start = microtime(true);

        $sales = Sale::with(['customer', 'user', 'details'])->take(100)->get();

        $duration = microtime(true) - $start;

        $this->assertLessThan(0.5, $duration); // Should complete in less than 500ms
    }

    /**
     * Test update performance on large dataset
     */
    public function test_bulk_update_performance()
    {
        $company = Company::factory()->create();
        Customer::factory(1000)->create(['company_id' => $company->id]);

        $start = microtime(true);

        Customer::where('company_id', $company->id)->update(['status' => 'updated']);

        $duration = microtime(true) - $start;

        $this->assertEquals(1000, Customer::where('status', 'updated')->count());
        $this->assertLessThan(2, $duration);
    }

    /**
     * Test delete performance on large dataset
     */
    public function test_bulk_delete_performance()
    {
        $company = Company::factory()->create();
        Customer::factory(1000)->create(['company_id' => $company->id]);

        $start = microtime(true);

        Customer::where('company_id', $company->id)->delete();

        $duration = microtime(true) - $start;

        $this->assertEquals(0, Customer::count());
        $this->assertLessThan(2, $duration);
    }

    /**
     * Test concurrent read operations
     */
    public function test_concurrent_read_operations()
    {
        $company = Company::factory()->create();
        Customer::factory(5000)->create(['company_id' => $company->id]);

        $start = microtime(true);

        for ($i = 0; $i < 100; $i++) {
            Customer::count();
        }

        $duration = microtime(true) - $start;

        $this->assertLessThan(1, $duration); // 100 count operations should be fast
    }

    /**
     * Test memory usage with large result sets
     */
    public function test_memory_usage_large_resultset()
    {
        $company = Company::factory()->create();
        Customer::factory(5000)->create(['company_id' => $company->id]);

        $initialMemory = memory_get_usage(true);

        $customers = Customer::all();

        $finalMemory = memory_get_usage(true);
        $memoryGrowth = ($finalMemory - $initialMemory) / (1024 * 1024); // Convert to MB

        $this->assertLessThan(50, $memoryGrowth); // Should not exceed 50MB growth
    }

    /**
     * Test query performance with multiple filters
     */
    public function test_query_performance_multiple_filters()
    {
        $company = Company::factory()->create();
        Customer::factory(5000)->create(['company_id' => $company->id]);

        $start = microtime(true);

        $customers = Customer::where('status', 'active')
            ->where('type', 'individual')
            ->orderBy('name')
            ->limit(100)
            ->get();

        $duration = microtime(true) - $start;

        $this->assertLessThan(0.5, $duration);
    }

    /**
     * Test aggregation performance on large dataset
     */
    public function test_aggregation_performance()
    {
        $company = Company::factory()->create();
        Sale::factory(10000)->create(['company_id' => $company->id]);

        $start = microtime(true);

        $total = Sale::where('company_id', $company->id)->sum('total');
        $count = Sale::where('company_id', $company->id)->count();
        $avg = Sale::where('company_id', $company->id)->avg('total');

        $duration = microtime(true) - $start;

        $this->assertLessThan(1, $duration); // All aggregations < 1 second
    }

    /**
     * Test eager loading performance
     */
    public function test_eager_loading_performance()
    {
        $company = Company::factory()->create();
        $user = User::factory()->create(['company_id' => $company->id]);

        Sale::factory(1000)->create(['company_id' => $company->id, 'user_id' => $user->id]);

        Auth::login($user);

        $start = microtime(true);

        $sales = Sale::with(['user', 'customer', 'details'])->get();

        $duration = microtime(true) - $start;

        $this->assertEquals(1000, $sales->count());
        $this->assertLessThan(2, $duration);
    }

    /**
     * Test database connection pool under load
     */
    public function test_connection_pool_stability()
    {
        $company = Company::factory()->create();

        $start = microtime(true);

        for ($i = 0; $i < 50; $i++) {
            Customer::count();
            User::count();
        }

        $duration = microtime(true) - $start;

        $this->assertLessThan(2, $duration); // 50 iterations of 2 queries each
    }

    /**
     * Test transaction performance under load
     */
    public function test_transaction_performance()
    {
        $company = Company::factory()->create();

        $start = microtime(true);

        for ($i = 0; $i < 100; $i++) {
            \DB::transaction(function () use ($company) {
                Customer::factory()->create(['company_id' => $company->id]);
            });
        }

        $duration = microtime(true) - $start;

        $this->assertEquals(100, Customer::count());
        $this->assertLessThan(5, $duration); // 100 transactions in less than 5 seconds
    }

    /**
     * Test index usage under load
     */
    public function test_index_usage_under_load()
    {
        $company = Company::factory()->create();
        Customer::factory(10000)->create(['company_id' => $company->id]);

        $start = microtime(true);

        for ($i = 0; $i < 100; $i++) {
            Customer::where('company_id', $company->id)->first();
        }

        $duration = microtime(true) - $start;

        $this->assertLessThan(0.5, $duration); // 100 indexed queries should be very fast
    }

    /**
     * Test recovery speed after heavy load
     */
    public function test_recovery_after_load()
    {
        $company = Company::factory()->create();

        // Create heavy load
        Customer::factory(10000)->create(['company_id' => $company->id]);

        $start = microtime(true);

        // Verify system recovers quickly
        $count = Customer::count();

        $duration = microtime(true) - $start;

        $this->assertEquals(10000, $count);
        $this->assertLessThan(1, $duration); // Should recover quickly
    }
}
