<?php

namespace App\Http\Controllers;

use App\User;

use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
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

    public function login(){
        if(Auth::attempt(['email'=>request('email'),'password'=>request('password')])){ 
            $user=Auth::user();
            $success['token']=$user->createToken('TestApp')->accessToken;
            return response()->json(['success'=>$success],200);
        }else{
            return response()->json(['error'=>'Unauthorized'],401);
        }
    }
    
}
