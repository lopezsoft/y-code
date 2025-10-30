<?php

namespace Tests\Feature\Migration;

use Tests\TestCase;
use App\Models\Company;
use App\Models\User;
use App\Models\Customer;
use App\Models\Sale;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Auth;

class CompanyIsolationTest extends TestCase
{
    use RefreshDatabase;

    /**
     * Test that users can only see their company's data
     */
    public function test_user_sees_only_their_company_data()
    {
        $company1 = Company::factory()->create();
        $company2 = Company::factory()->create();

        $user1 = User::factory()->create(['company_id' => $company1->id]);
        $customer1 = Customer::factory()->create(['company_id' => $company1->id]);

        $user2 = User::factory()->create(['company_id' => $company2->id]);
        $customer2 = Customer::factory()->create(['company_id' => $company2->id]);

        Auth::login($user1);

        // User1 should see only company1's customers
        $this->assertEquals(1, Customer::count());
        $this->assertEquals($customer1->id, Customer::first()->id);
    }

    /**
     * Test that queries respect company boundaries
     */
    public function test_queries_respect_company_boundaries()
    {
        $company1 = Company::factory()->create();
        $company2 = Company::factory()->create();

        Customer::factory(5)->create(['company_id' => $company1->id]);
        Customer::factory(3)->create(['company_id' => $company2->id]);

        Auth::login(User::factory()->create(['company_id' => $company1->id]));

        $this->assertEquals(5, Customer::count());
    }

    /**
     * Test that direct SQL queries still respect isolation
     */
    public function test_sql_queries_respect_isolation()
    {
        $company1 = Company::factory()->create();
        $company2 = Company::factory()->create();

        $customer1 = Customer::factory()->create(['company_id' => $company1->id]);
        $customer2 = Customer::factory()->create(['company_id' => $company2->id]);

        Auth::login(User::factory()->create(['company_id' => $company1->id]));

        $customers = \DB::table('customers')->get();
        $this->assertEquals(1, $customers->count());
    }

    /**
     * Test that company switching works correctly
     */
    public function test_company_switching_isolation()
    {
        $company1 = Company::factory()->create();
        $company2 = Company::factory()->create();

        $user1 = User::factory()->create(['company_id' => $company1->id]);
        $user2 = User::factory()->create(['company_id' => $company2->id]);

        Customer::factory(5)->create(['company_id' => $company1->id]);
        Customer::factory(3)->create(['company_id' => $company2->id]);

        Auth::login($user1);
        $this->assertEquals(5, Customer::count());

        Auth::logout();
        Auth::login($user2);
        $this->assertEquals(3, Customer::count());
    }

    /**
     * Test that admins can't access other companies
     */
    public function test_admin_cannot_access_other_companies()
    {
        $company1 = Company::factory()->create();
        $company2 = Company::factory()->create();

        $admin1 = User::factory()->create(['company_id' => $company1->id, 'role' => 'admin']);
        $admin2 = User::factory()->create(['company_id' => $company2->id, 'role' => 'admin']);

        Customer::factory(5)->create(['company_id' => $company1->id]);
        Customer::factory(3)->create(['company_id' => $company2->id]);

        Auth::login($admin1);
        $this->assertEquals(5, Customer::count());

        Auth::logout();
        Auth::login($admin2);
        $this->assertEquals(3, Customer::count());
    }

    /**
     * Test that data aggregation respects company boundaries
     */
    public function test_data_aggregation_respects_boundaries()
    {
        $company1 = Company::factory()->create();
        $company2 = Company::factory()->create();

        Customer::factory(10)->create(['company_id' => $company1->id]);
        Customer::factory(5)->create(['company_id' => $company2->id]);

        Auth::login(User::factory()->create(['company_id' => $company1->id]));

        $count = Customer::count();
        $this->assertEquals(10, $count);
    }

    /**
     * Test joins don't leak data across companies
     */
    public function test_joins_respect_company_isolation()
    {
        $company1 = Company::factory()->create();
        $company2 = Company::factory()->create();

        $user1 = User::factory()->create(['company_id' => $company1->id]);
        $user2 = User::factory()->create(['company_id' => $company2->id]);

        Sale::factory(5)->create(['company_id' => $company1->id, 'user_id' => $user1->id]);
        Sale::factory(3)->create(['company_id' => $company2->id, 'user_id' => $user2->id]);

        Auth::login($user1);

        $sales = Sale::with('user')->get();
        $this->assertEquals(5, $sales->count());
    }

    /**
     * Test that company_id can't be manually changed to access other companies
     */
    public function test_cannot_manually_change_company_id()
    {
        $company1 = Company::factory()->create();
        $company2 = Company::factory()->create();

        $user1 = User::factory()->create(['company_id' => $company1->id]);
        $customer1 = Customer::factory()->create(['company_id' => $company1->id]);

        Auth::login($user1);

        // Try to change company_id
        $customer1->company_id = $company2->id;
        $customer1->save();

        // Should still only see company1's data due to global scope
        $this->assertEquals(1, Customer::count());
    }

    /**
     * Test that soft deletes respect company isolation
     */
    public function test_soft_deletes_respect_isolation()
    {
        $company1 = Company::factory()->create();
        $company2 = Company::factory()->create();

        $user1 = User::factory()->create(['company_id' => $company1->id]);
        $customer1 = Customer::factory()->create(['company_id' => $company1->id]);
        $customer2 = Customer::factory()->create(['company_id' => $company2->id]);

        Auth::login($user1);

        $customer1->delete();

        $this->assertEquals(0, Customer::count());
        $this->assertEquals(1, Customer::withTrashed()->count());
    }

    /**
     * Test that model events respect company isolation
     */
    public function test_model_events_respect_isolation()
    {
        $company1 = Company::factory()->create();
        $company2 = Company::factory()->create();

        $user1 = User::factory()->create(['company_id' => $company1->id]);

        Auth::login($user1);

        $customer = Customer::factory()->create(['company_id' => $company1->id]);
        $customer->update(['name' => 'Updated']);

        $this->assertEquals('Updated', Customer::first()->name);
    }

    /**
     * Test pagination respects company boundaries
     */
    public function test_pagination_respects_boundaries()
    {
        $company1 = Company::factory()->create();
        $company2 = Company::factory()->create();

        Customer::factory(25)->create(['company_id' => $company1->id]);
        Customer::factory(25)->create(['company_id' => $company2->id]);

        Auth::login(User::factory()->create(['company_id' => $company1->id]));

        $page = Customer::paginate(10);

        $this->assertEquals(3, $page->lastPage());
        $this->assertEquals(25, $page->total());
    }

    /**
     * Test eager loading respects company isolation
     */
    public function test_eager_loading_respects_isolation()
    {
        $company1 = Company::factory()->create();
        $company2 = Company::factory()->create();

        $user1 = User::factory()->create(['company_id' => $company1->id]);
        Sale::factory(5)->create(['company_id' => $company1->id, 'user_id' => $user1->id]);
        Sale::factory(3)->create(['company_id' => $company2->id]);

        Auth::login($user1);

        $sales = Sale::with('user')->get();
        $this->assertEquals(5, $sales->count());
    }
}
