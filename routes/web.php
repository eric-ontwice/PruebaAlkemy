<?php

use App\Http\Controllers\LoginController;
use App\Http\Controllers\DashController;
use App\Http\Controllers\UsuariosController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/',[LoginController::class, 'login']);
Route::post('/login',[LoginController::class,'logear']);


    Route::get('/dashboard', [DashController::class,'dashboard'])->middleware('adm');
    Route::get('/usuarios/getUsuarios', [UsuariosController::class,'getUsuarios']);
    Route::delete('/usuarios/delete/{id}', [UsuariosController::class,'eliminarUsuario']);
    Route::post('/usuarios/create/', [UsuariosController::class,'crearUsuario']);
    Route::put('/usuarios/update/', [UsuariosController::class,'updateUsuario']);
    Route::get('usuarios/getUsuario/{id}', [UsuariosController::class,'getUsuario']);
    Route::get('usuarios/api/consumir',[UsuariosController::class,"consumirApi"]);