<?php

namespace App\Http\Controllers;

use App\User;

use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

class ApiUserController extends Controller
{
    public function register(Request $request){
        $validator = Validator::make($request->all(),[
            'email'=>'required',
            'password'=>'required',
            'passwordCopy'=>'required|same:password'
        ]);
        if($validator->fails()){return response()->json(['error'=>$validator->errors()],401);}
        $input=$request->all();
        $input['password']=bcrypt($input['password']);
        $user=User::create($input);
        $success['token']=$user->createToken('TestApp')->accessToken;
        $success['email']=$user->email;
        return response()->json(['success'=>$success],200);
    }

    
}
