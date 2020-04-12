<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ApiLocalizationController extends Controller
{
    public function index(Request $request)
 {
   $data = [
     'message' => trans('test.message')
   ];
   return response()->json($data, 200);
 }
}
