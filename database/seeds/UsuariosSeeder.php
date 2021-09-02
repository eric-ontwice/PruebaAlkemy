<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Faker\Generator as Faker;
use Illuminate\Support\Str;


class UsuariosSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('usuarios')->insert([
            'nombre' => 'Fernando',
            'apellido' => 'Inzunza',
        ]);
        DB::table('usuarios')->insert([
            'nombre' =>'Jesus',
            'apellido' => 'Velarde',
        ]);
        DB::table('usuarios')->insert([
            'nombre' => 'Nombre',
            'apellido' => 'Prueba',
        ]);
        DB::table('usuarios')->insert([
            'nombre' => 'Jose',
            'apellido' => 'Perez',
        ]);
        DB::table('usuarios')->insert([
            'nombre' => 'Juan',
            'apellido' => 'Diaz',
        ]);
    }
}
