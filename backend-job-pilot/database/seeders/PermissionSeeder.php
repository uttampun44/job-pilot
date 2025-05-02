<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Permission;
use App\Models\PermissionTitle;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $permissions = config('permissions');
        foreach ($permissions as $permissionData) {
           $permission = Permission::create([
                'name' => $permissionData['name'],
                'guard_name' => $permissionData['guard_name'] ?? 'web',
            ]);
            PermissionTitle::create([
                 'title' => $permissionData['title'],
                 'permission_id' => $permission->id,
             ]);
        }
    }
}
