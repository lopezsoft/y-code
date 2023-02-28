<?php

namespace App\Http\Controllers\Shopping;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Shopping\Shopping;

class ShoppingController extends Controller
{
    public function createDetail(Request $request)
    {
      $model  = new Shopping();
			return $model->createDetail($request);
    }

    public function create(Request $request)
    {
      $model      = new Shopping();
			return $model->create($request);
    }

    public function selectDetailId($id, Request $request)
    {
        $model  = new Shopping();
				return $model->selectDetailId($id, $request);
    }

    public function selectDetail($id, Request $request)
    {
        $model  = new Shopping();
        return $model->selectDetail($id, $request);
    }

    public function select(Request $request)
    {
        $model  = new Shopping();
        return 	$model->select($request);
    }

    public function update($id, Request $request)
    {
        $model      = new Shopping();
        return $model->update($id, $request);
    }

    public function updateDetail($id, Request $request)
    {
        $model      = new Shopping();
        return $model->updateDetail($id, $request);
    }

    public function deleteDetail($id, Request $request)
    {
        $model      = new Shopping();
        return $model->deleteDetail($id, $request);
    }

    public function delete($id, Request $request)
    {
        $model      = new Shopping();
				return $model->delete($id, $request);
    }
}
