<?php

namespace Modules\Authentication\Database\Seeders;

use App\Models\Role;
use App\Models\User;
use Illuminate\Database\Seeder;

class UserFakeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $roles = ['Candidate', 'Employee'];
        // $this->call([]);

        foreach ($roles as $role) {
            Role::firstOrCreate(['name' => $role]);
        }

         User::factory(700)->create()->each(function ($user) use ($roles) {
            $randomRole = $roles[array_rand($roles)];
            $user->assignRole($randomRole);
        });
    }
}
