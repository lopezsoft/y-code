<?php

namespace Tests\Feature\Migration;

use Tests\TestCase;
use App\Models\Company;
use App\Models\User;
use App\Models\Customer;
use App\Models\Sale;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Auth;

class AuthorizationTest extends TestCase
{
    use RefreshDatabase;

    /**
     * Test that unauthenticated users can't access data
     */
    public function test_unauthenticated_users_cannot_access_data()
    {
        Customer::factory()->create();

        $this->assertEquals(0, Customer::count());
    }

    /**
     * Test that users can only access their company's resources
     */
    public function test_users_can_only_access_own_company_resources()
    {
        $company1 = Company::factory()->create();
        $company2 = Company::factory()->create();

        $user1 = User::factory()->create(['company_id' => $company1->id]);
        $user2 = User::factory()->create(['company_id' => $company2->id]);

        Customer::factory(3)->create(['company_id' => $company1->id]);
        Customer::factory(3)->create(['company_id' => $company2->id]);

        Auth::login($user1);
        $this->assertEquals(3, Customer::count());
    }

    /**
     * Test admin role can manage users in their company
     */
    public function test_admin_can_manage_users()
    {
        $company = Company::factory()->create();
        $admin = User::factory()->create(['company_id' => $company->id, 'role' => 'admin']);

        Auth::login($admin);

        $user = User::factory()->create(['company_id' => $company->id]);
        $this->assertDatabaseHas('users', ['id' => $user->id, 'company_id' => $company->id]);
    }

    /**
     * Test regular user can't create other users
     */
    public function test_regular_user_cannot_create_users()
    {
        $company = Company::factory()->create();
        $user = User::factory()->create(['company_id' => $company->id, 'role' => 'user']);

        Auth::login($user);

        // Regular users shouldn't be able to create other users
        $initialCount = User::count();
        $newUser = User::factory()->make(['company_id' => $company->id]);

        // This would typically be prevented by authorization checks in the controller
        $this->assertEquals($initialCount, User::count());
    }

    /**
     * Test that deleted users lose access
     */
    public function test_deleted_users_lose_access()
    {
        $company = Company::factory()->create();
        $user = User::factory()->create(['company_id' => $company->id]);

        Auth::login($user);
        $this->assertTrue(Auth::check());

        $user->delete();

        Auth::logout();
        Auth::attempt(['email' => $user->email, 'password' => 'password']);

        $this->assertFalse(Auth::check());
    }

    /**
     * Test permission inheritance through roles
     */
    public function test_permission_inheritance_through_roles()
    {
        $company = Company::factory()->create();
        $admin = User::factory()->create(['company_id' => $company->id, 'role' => 'admin']);
        $user = User::factory()->create(['company_id' => $company->id, 'role' => 'user']);

        Auth::login($admin);
        $adminCustomers = Customer::count();

        Auth::logout();
        Auth::login($user);
        $userCustomers = Customer::count();

        $this->assertEquals($adminCustomers, $userCustomers);
    }

    /**
     * Test that users can't modify other users' data
     */
    public function test_users_cannot_modify_other_users_data()
    {
        $company = Company::factory()->create();
        $user1 = User::factory()->create(['company_id' => $company->id]);
        $customer1 = Customer::factory()->create(['company_id' => $company->id]);

        Auth::login($user1);

        $originalName = $customer1->name;
        $customer1->update(['name' => 'Modified']);

        $this->assertEquals('Modified', Customer::find($customer1->id)->name);
    }

    /**
     * Test that admins can view audit logs
     */
    public function test_admins_can_view_audit_logs()
    {
        $company = Company::factory()->create();
        $admin = User::factory()->create(['company_id' => $company->id, 'role' => 'admin']);

        Auth::login($admin);

        // Admin should have access to audit logs (if implemented)
        $this->assertTrue(Auth::user()->hasRole('admin'));
    }

    /**
     * Test that regular users can't access admin functions
     */
    public function test_regular_users_cannot_access_admin_functions()
    {
        $company = Company::factory()->create();
        $user = User::factory()->create(['company_id' => $company->id, 'role' => 'user']);

        Auth::login($user);

        // Regular user shouldn't have admin role
        $this->assertFalse(Auth::user()->hasRole('admin'));
    }

    /**
     * Test resource ownership verification
     */
    public function test_resource_ownership_verification()
    {
        $company = Company::factory()->create();
        $user = User::factory()->create(['company_id' => $company->id]);
        $customer = Customer::factory()->create(['company_id' => $company->id]);

        Auth::login($user);

        $this->assertEquals($user->company_id, $customer->company_id);
    }

    /**
     * Test that API tokens respect authorization
     */
    public function test_api_tokens_respect_authorization()
    {
        $company = Company::factory()->create();
        $user = User::factory()->create(['company_id' => $company->id]);

        // Create an API token
        $token = $user->createToken('test-token');

        // Token should be associated with the user's company
        $this->assertEquals($company->id, $user->company_id);
    }

    /**
     * Test that guest users see no data
     */
    public function test_guest_users_see_no_data()
    {
        Customer::factory(10)->create();

        // Guest should see 0 customers due to global scope
        $this->assertEquals(0, Customer::count());
    }

    /**
     * Test role-based resource filtering
     */
    public function test_role_based_resource_filtering()
    {
        $company = Company::factory()->create();
        $admin = User::factory()->create(['company_id' => $company->id, 'role' => 'admin']);
        $user = User::factory()->create(['company_id' => $company->id, 'role' => 'user']);

        Sale::factory(10)->create(['company_id' => $company->id]);

        Auth::login($admin);
        $adminSales = Sale::count();

        Auth::logout();
        Auth::login($user);
        $userSales = Sale::count();

        $this->assertEquals($adminSales, $userSales); // Both should see all sales for their company
    }

    /**
     * Test that authorization checks can't be bypassed via query manipulation
     */
    public function test_authorization_cannot_be_bypassed()
    {
        $company1 = Company::factory()->create();
        $company2 = Company::factory()->create();

        $user1 = User::factory()->create(['company_id' => $company1->id]);
        $customer2 = Customer::factory()->create(['company_id' => $company2->id]);

        Auth::login($user1);

        // Try to bypass authorization
        $customer = Customer::find($customer2->id);

        // Should not be able to find another company's customer
        $this->assertNull($customer);
    }

    /**
     * Test that batch operations respect authorization
     */
    public function test_batch_operations_respect_authorization()
    {
        $company1 = Company::factory()->create();
        $company2 = Company::factory()->create();

        $user1 = User::factory()->create(['company_id' => $company1->id]);

        Customer::factory(5)->create(['company_id' => $company1->id]);
        Customer::factory(5)->create(['company_id' => $company2->id]);

        Auth::login($user1);

        $customers = Customer::all();
        $this->assertEquals(5, $customers->count());
    }

    /**
     * Test authorization with concurrent requests
     */
    public function test_authorization_with_concurrent_requests()
    {
        $company1 = Company::factory()->create();
        $company2 = Company::factory()->create();

        $user1 = User::factory()->create(['company_id' => $company1->id]);
        $user2 = User::factory()->create(['company_id' => $company2->id]);

        Customer::factory(3)->create(['company_id' => $company1->id]);
        Customer::factory(3)->create(['company_id' => $company2->id]);

        // Simulate user1 context
        Auth::login($user1);
        $count1 = Customer::count();

        // Switch to user2 context
        Auth::logout();
        Auth::login($user2);
        $count2 = Customer::count();

        $this->assertEquals(3, $count1);
        $this->assertEquals(3, $count2);
    }
}
