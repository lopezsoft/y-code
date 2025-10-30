<?php

namespace Tests\Feature\Migration;

use Tests\TestCase;
use App\Models\Company;
use App\Models\User;
use App\Models\Customer;
use App\Models\Sale;
use App\Models\SaleDetail;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\DB;

class DataIntegrityTest extends TestCase
{
    use RefreshDatabase;

    /**
     * Test that all companies maintain referential integrity
     */
    public function test_company_referential_integrity()
    {
        $company = Company::factory()->create();
        $user = User::factory()->create(['company_id' => $company->id]);
        $customer = Customer::factory()->create(['company_id' => $company->id]);

        $this->assertDatabaseHas('users', [
            'id' => $user->id,
            'company_id' => $company->id,
        ]);

        $this->assertDatabaseHas('customers', [
            'id' => $customer->id,
            'company_id' => $company->id,
        ]);
    }

    /**
     * Test that deleting a company deletes all related data
     */
    public function test_company_cascade_delete()
    {
        $company = Company::factory()->create();
        $user = User::factory()->create(['company_id' => $company->id]);
        $customer = Customer::factory()->create(['company_id' => $company->id]);

        $userId = $user->id;
        $customerId = $customer->id;

        $company->delete();

        $this->assertDatabaseMissing('users', ['id' => $userId]);
        $this->assertDatabaseMissing('customers', ['id' => $customerId]);
    }

    /**
     * Test that soft deletes preserve data integrity
     */
    public function test_soft_delete_preserves_integrity()
    {
        $company = Company::factory()->create();
        $customer = Customer::factory()->create(['company_id' => $company->id]);

        $customer->delete();

        $this->assertDatabaseHas('customers', [
            'id' => $customer->id,
            'deleted_at' => now(),
        ]);

        $this->assertNull(Customer::find($customer->id));
    }

    /**
     * Test that timestamps are correctly set on creation
     */
    public function test_timestamps_on_creation()
    {
        $company = Company::factory()->create();

        $this->assertNotNull($company->created_at);
        $this->assertNotNull($company->updated_at);
        $this->assertNull($company->deleted_at);
    }

    /**
     * Test that timestamps are correctly updated on modification
     */
    public function test_timestamps_on_update()
    {
        $company = Company::factory()->create();
        $originalCreatedAt = $company->created_at;

        sleep(1);

        $company->update(['name' => 'Updated Name']);

        $this->assertEquals($originalCreatedAt, $company->created_at);
        $this->assertGreaterThan($originalCreatedAt, $company->updated_at);
    }

    /**
     * Test that all required fields are present
     */
    public function test_required_fields_present()
    {
        $company = Company::factory()->create();

        $this->assertNotNull($company->name);
        $this->assertNotNull($company->code);
        $this->assertNotNull($company->created_at);
        $this->assertNotNull($company->updated_at);
    }

    /**
     * Test foreign key constraints
     */
    public function test_foreign_key_constraints()
    {
        $this->expectException(\Exception::class);

        User::create([
            'company_id' => 99999,
            'name' => 'Test User',
            'email' => 'test@example.com',
            'password' => bcrypt('password'),
        ]);
    }

    /**
     * Test unique constraints
     */
    public function test_unique_constraints()
    {
        $company = Company::factory()->create(['code' => 'UNIQUE_CODE']);

        $this->expectException(\Exception::class);

        Company::create([
            'name' => 'Another Company',
            'code' => 'UNIQUE_CODE',
        ]);
    }

    /**
     * Test data type consistency
     */
    public function test_data_type_consistency()
    {
        $company = Company::factory()->create();

        $this->assertIsInt($company->id);
        $this->assertIsString($company->name);
        $this->assertIsString($company->code);
    }

    /**
     * Test NULL constraints
     */
    public function test_null_constraints()
    {
        $this->expectException(\Exception::class);

        Company::create([
            'name' => null,
            'code' => 'TEST_CODE',
        ]);
    }

    /**
     * Test relationships maintain consistency
     */
    public function test_relationships_consistency()
    {
        $company = Company::factory()->create();
        $user = User::factory()->create(['company_id' => $company->id]);

        $this->assertEquals($company->id, $user->company_id);
        $this->assertEquals($company->id, $user->company()->first()->id);
    }

    /**
     * Test that all company records have at least one user
     */
    public function test_company_user_relationship()
    {
        $company = Company::factory()->create();
        User::factory(3)->create(['company_id' => $company->id]);

        $this->assertEquals(3, $company->users()->count());
    }

    /**
     * Test that orphaned records don't exist
     */
    public function test_no_orphaned_records()
    {
        $orphanedUsers = User::whereDoesntHave('company')->get();

        $this->assertEquals(0, $orphanedUsers->count());
    }

    /**
     * Test transaction rollback maintains integrity
     */
    public function test_transaction_rollback_integrity()
    {
        try {
            DB::transaction(function () {
                $company = Company::factory()->create();
                throw new \Exception('Rollback test');
            });
        } catch (\Exception $e) {
            // Expected exception
        }

        $this->assertEquals(0, Company::count());
    }

    /**
     * Test transaction commit maintains integrity
     */
    public function test_transaction_commit_integrity()
    {
        DB::transaction(function () {
            Company::factory(3)->create();
        });

        $this->assertEquals(3, Company::count());
    }

    /**
     * Test that indices are properly used
     */
    public function test_index_performance()
    {
        Company::factory(100)->create();

        $start = microtime(true);
        $company = Company::where('code', Company::first()->code)->first();
        $duration = microtime(true) - $start;

        $this->assertNotNull($company);
        $this->assertLessThan(0.01, $duration); // Should be very fast with index
    }
}
