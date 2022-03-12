<?php

namespace App\Http\Controllers\Persons;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Interfaces\CrudInterface;
use App\Models\Persons\Customers;
use App\Models\Persons\Persons;

class CustomersController extends Controller implements CrudInterface
{
    public function create(Request $request)
    {
        return Persons::create($request, new Customers());
    }

    public function read(Request $request)
    {
        return Persons::read($request, new Customers());
    }

    public function update($id, Request $request)
    {
        return Persons::update($id, $request, new Customers());
    }

    public function delete($id, $request)
    {
        return Persons::delete($id, $request, new Customers());
    }
}
