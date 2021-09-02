<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('admin')->insert(['usuario' => 'fernandoi','contrasena' => 'admin123', 'nombre' => 'Fernando Inzunza']);
    }
}
