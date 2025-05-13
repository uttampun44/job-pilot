<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Permission;
use App\Models\PermissionTitle;
use Spatie\Permission\PermissionRegistrar;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
         app()[PermissionRegistrar::class]->forgetCachedPermissions();

        $permissions = config('permissions');
        foreach ($permissions as $permissionData) {
           $permission = Permission::firstOrCreate([
                'name' => $permissionData['name'],
                'guard_name' => $permissionData['guard_name'] ?? 'web',
            ]);
            PermissionTitle::firstOrCreate([
                 'title' => $permissionData['title'],
                 'permission_id' => $permission->id,
             ]);
        }
    }
}
