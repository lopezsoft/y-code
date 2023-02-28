<?php

namespace App\Http\Controllers\Sales;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Sales\Sales;

class SalesController extends Controller
{

    function read(Request $request) {
        $model	= new Sales();
        return $model->read($request);
    }

    public function getCheckin(Request $request)
    {
        $model	= new Sales();

        return $model->getCheckin($request);
    }
    /**
     * Guarda las facturas o documentos electronicos
     */
    public function create(Request $request)
    {
      return Sales::create($request);
    }
}
