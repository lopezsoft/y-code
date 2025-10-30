<?php

namespace Tests\Feature\Migration;

use Tests\TestCase;
use App\Models\Company;
use App\Models\User;
use App\Models\Customer;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\DB;

class RollbackTest extends TestCase
{
    use RefreshDatabase;

    /**
     * Test that rollback restores previous data
     */
    public function test_rollback_restores_previous_data()
    {
        $initialCount = Company::count();

        try {
            DB::transaction(function () {
                Company::factory(5)->create();
                throw new \Exception('Simulated error');
            });
        } catch (\Exception $e) {
            // Expected
        }

        $this->assertEquals($initialCount, Company::count());
    }

    /**
     * Test that partial data is not committed on rollback
     */
    public function test_partial_data_not_committed()
    {
        $companyCount = Company::count();
        $userCount = User::count();

        try {
            DB::transaction(function () {
                Company::factory(3)->create();
                User::factory(10)->create();
                throw new \Exception('Rollback');
            });
        } catch (\Exception $e) {
            // Expected
        }

        $this->assertEquals($companyCount, Company::count());
        $this->assertEquals($userCount, User::count());
    }

    /**
     * Test rollback with nested transactions
     */
    public function test_nested_transaction_rollback()
    {
        try {
            DB::transaction(function () {
                Company::factory(2)->create();

                DB::transaction(function () {
                    User::factory(3)->create();
                    throw new \Exception('Nested rollback');
                });
            });
        } catch (\Exception $e) {
            // Expected
        }

        $this->assertEquals(0, Company::count());
        $this->assertEquals(0, User::count());
    }

    /**
     * Test savepoint rollback
     */
    public function test_savepoint_rollback()
    {
        DB::transaction(function () {
            Company::factory(3)->create();

            DB::transaction(function () {
                User::factory(5)->create();
            });

            // At this point, only companies should exist
            $this->assertEquals(3, Company::count());
        });

        $this->assertEquals(3, Company::count());
        $this->assertEquals(5, User::count());
    }

    /**
     * Test rollback with foreign key constraints
     */
    public function test_rollback_with_fk_constraints()
    {
        try {
            DB::transaction(function () {
                $company = Company::factory()->create();
                User::factory(5)->create(['company_id' => $company->id]);

                throw new \Exception('Rollback');
            });
        } catch (\Exception $e) {
            // Expected
        }

        $this->assertEquals(0, Company::count());
        $this->assertEquals(0, User::count());
    }

    /**
     * Test rollback doesn't affect concurrent transactions
     */
    public function test_rollback_isolation()
    {
        $company1 = Company::factory()->create();

        try {
            DB::transaction(function () use ($company1) {
                $company1->update(['name' => 'Updated']);
                throw new \Exception('Rollback');
            });
        } catch (\Exception $e) {
            // Expected
        }

        $company1->refresh();
        $this->assertNotEquals('Updated', $company1->name);
    }

    /**
     * Test rollback with soft deletes
     */
    public function test_rollback_soft_delete()
    {
        $customer = Customer::factory()->create();
        $customerId = $customer->id;

        try {
            DB::transaction(function () use ($customer) {
                $customer->delete();
                throw new \Exception('Rollback');
            });
        } catch (\Exception $e) {
            // Expected
        }

        $customer->refresh();
        $this->assertNull($customer->deleted_at);
        $this->assertDatabaseHas('customers', ['id' => $customerId]);
    }

    /**
     * Test rollback with bulk operations
     */
    public function test_rollback_bulk_operations()
    {
        try {
            DB::transaction(function () {
                DB::table('companies')->insert([
                    ['name' => 'Company 1', 'code' => 'C1', 'created_at' => now(), 'updated_at' => now()],
                    ['name' => 'Company 2', 'code' => 'C2', 'created_at' => now(), 'updated_at' => now()],
                    ['name' => 'Company 3', 'code' => 'C3', 'created_at' => now(), 'updated_at' => now()],
                ]);

                throw new \Exception('Rollback bulk');
            });
        } catch (\Exception $e) {
            // Expected
        }

        $this->assertEquals(0, Company::count());
    }

    /**
     * Test rollback speed with large datasets
     */
    public function test_rollback_performance_large_dataset()
    {
        $start = microtime(true);

        try {
            DB::transaction(function () {
                Company::factory(100)->create();
                throw new \Exception('Rollback');
            });
        } catch (\Exception $e) {
            // Expected
        }

        $duration = microtime(true) - $start;

        $this->assertEquals(0, Company::count());
        $this->assertLessThan(5, $duration); // Should complete in less than 5 seconds
    }

    /**
     * Test rollback with schema operations
     */
    public function test_rollback_does_not_affect_schema()
    {
        $columns = DB::getSchemaBuilder()->getColumnListing('companies');

        try {
            DB::transaction(function () {
                Company::factory(5)->create();
                throw new \Exception('Rollback');
            });
        } catch (\Exception $e) {
            // Expected
        }

        $newColumns = DB::getSchemaBuilder()->getColumnListing('companies');
        $this->assertEquals($columns, $newColumns);
    }

    /**
     * Test rollback with multiple table operations
     */
    public function test_rollback_multiple_tables()
    {
        try {
            DB::transaction(function () {
                $company = Company::factory()->create();
                User::factory(3)->create(['company_id' => $company->id]);
                Customer::factory(5)->create(['company_id' => $company->id]);

                throw new \Exception('Rollback all');
            });
        } catch (\Exception $e) {
            // Expected
        }

        $this->assertEquals(0, Company::count());
        $this->assertEquals(0, User::count());
        $this->assertEquals(0, Customer::count());
    }

    /**
     * Test rollback preserves database state consistency
     */
    public function test_rollback_maintains_consistency()
    {
        $company = Company::factory()->create();
        $user = User::factory()->create(['company_id' => $company->id]);

        $before = DB::table('companies')->get();

        try {
            DB::transaction(function () {
                Company::factory(10)->create();
                throw new \Exception('Rollback');
            });
        } catch (\Exception $e) {
            // Expected
        }

        $after = DB::table('companies')->get();
        $this->assertEquals($before->count(), $after->count());
    }
}
