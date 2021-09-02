<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Admin;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Validator;

class LoginController extends Controller
{
    public function Login()
    {
        return view('login');
    }
    public function Logear(Request $request)
    {

        //var_dump($request->password);

        // request()->validate(['username ' => 'required','password' => 'required',]);
        $validator = Validator::make($request->all(), [
            'username' => 'required',
            'password' => 'required',
        ]);
        if ($validator->fails()) {
            return redirect('/');
        } else {
            $correcto = Admin::where('usuario', $request->username)->where('contrasena', $request->password)->count();
            if ($correcto > 0) {
                Session::put('SignedUp', 1);
                return redirect('/dashboard');
            }
        }
    }
}
