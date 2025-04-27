<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $roles = [
            [
                'name' => 'Super Admin',
                'guard_name' => 'web',
            ],
            [
                 'name' => ' Admin',
                'guard_name' => 'web',
            ],
            [
                'name' => 'Candidate',
                'guard_name' => 'web',
            ],
            [
                'name' => 'Employer',
                'guard_name' => 'web',
            ]
            ];

        foreach ($roles as $role) {
            DB::table('roles')->insert($role);
        }
    }
}
