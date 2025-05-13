<?php

namespace Modules\Authentication\database\seeders;

use Illuminate\Database\Seeder;
use Modules\Authentication\Database\Seeders\UserFakeSeeder;

class AuthenticationDatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // $this->call([]);
        $this->call(UserFakeSeeder::class);
    }
}
