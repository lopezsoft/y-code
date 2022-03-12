<?php

namespace App\Http\Controllers\Sales;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Sales\SalesDetail;

class SalesDetailController extends Controller
{
  function read(Request $request){
		return SalesDetail::read($request);
	}
}
