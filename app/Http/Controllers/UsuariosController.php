<?php

namespace App\Http\Controllers;
use GuzzleHttp\Client;
use Illuminate\Http\Request;
use App\Usuario;
class UsuariosController extends Controller
{
    public function getUsuarios(){
        $usuarios = Usuario::all();
        return json_encode($usuarios);
    }
    
    public function eliminarUsuario($id){
        
       // $body = $request->json()->all();
        
       $user = Usuario::Where('id',$id)->get()->first();
        $user->delete();
        return response()->json('USER DELETED CORRECTLY');
    }
    public function crearUsuario(Request $request){
        $body = $request->json()->all();
         $user = new Usuario;
         $user->nombre = $body['nameUser'];
         $user->apellido = $body['lastNameUser'];
         $user->save();       
         return response()->json(["id" => $user->id,"mensaje" => "USER CREATED CORRECTLY"]);
    }
    public function updateUsuario(Request $request){
        $body = $request->json()->all();
        $user = Usuario::Where('id',$body['id'])->get()->first();
        $user->nombre = $body['nuevoNombre'];
        $user->apellido = $body['nuevoApellido'];
        $user->save();
        return response()->json('USER UPDATED CORRECTLY');
    }

    public function getUsuario($id){
        $user = Usuario::Where('id',$id)->get()->first();
        
        return response()->json($user);
    }

    public function consumirApi(){
        $client = new Client();
        $res = $client->request("GET","https://jsonplaceholder.typicode.com/posts");
        $data = $res->getBody();
        return json_encode($data);
    }
}
