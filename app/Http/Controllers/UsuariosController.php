<?php

namespace App\Http\Controllers;

use GuzzleHttp\Client;
use Illuminate\Http\Request;
use App\Usuario;
use Illuminate\Support\Facades\Validator;

class UsuariosController extends Controller
{
    public function getUsuarios()
    {
        $usuarios = Usuario::all();
        return json_encode($usuarios);
    }

    public function eliminarUsuario($id)
    {

        // $body = $request->json()->all();

        $user = Usuario::Where('id', $id)->get()->first();
        $user->delete();
        return response()->json('USER DELETED CORRECTLY');
    }
    public function crearUsuario(Request $request)
    {
        $body = $request->json()->all();
        $validator = Validator::make($request->all(), [
            'nameUser' => 'required|min:1',
            'lastNameUser' => 'required|min:1',
        ]);
        if ($validator->fails()) {
            return response()->json(['mensaje' => $validator->errors()]);
        } else {
            $user = new Usuario;
            $user->nombre = $body['nameUser'];
            $user->apellido = $body['lastNameUser'];
            $user->save();
            return response()->json(["id" => $user->id, "mensaje" => "USER CREATED CORRECTLY"]);
        }
    }
    public function updateUsuario(Request $request)
    {
        $body = $request->json()->all();
        $validator = Validator::make($request->all(), [
            'nuevoNombre' => 'required|min:1',
            'nuevoApellido' => 'required|min:1',
        ]);
        if($validator->fails())
        {
            return response()->json(['mensaje' => $validator->errors()]);
        }
        else{
            $user = Usuario::Where('id', $body['id'])->get()->first();
            $user->nombre = $body['nuevoNombre'];
            $user->apellido = $body['nuevoApellido'];
            $user->save();
            return response()->json(['mensaje' => 'USER UPDATED CORRECTLY']);
        }
        
    }

    public function getUsuario($id)
    {
        $user = Usuario::Where('id', $id)->get()->first();

        return response()->json($user);
    }

    public function consumirApi()
    {
        $client = new Client();
        $res = $client->request("GET", "https://jsonplaceholder.typicode.com/posts");
        $data = $res->getBody();
        return json_encode($data);
    }
}
