<?php

namespace Modules\Settings\app\Repositories;

use App\Models\Permission;
use App\Models\Role;
use Illuminate\Support\Facades\DB;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

class PermissionRepositories
{
    public function fetchRoles()
    {
        return Role::query()->select('id', 'name')->get()->toArray();
    }

    public function fetchPermissions()
    {
        $permissions = Permission::with('permissionsTitles')->get();

        $grouped = [];

        foreach ($permissions as $permission) {
            $action = strtolower(Str::before($permission->name, ' '));


            if (!in_array($action, ['add', 'edit', 'delete', 'view'])) {
                continue;
            }

            foreach ($permission->permissionsTitles as $title) {
                $titleName = $title->title;

                if (!preg_match('/^(add|edit|view|delete)/i', $permission->name)) {
                    continue;
                }

                foreach ($permission->permissionsTitles as $title) {
                    $titleName = $title->title;

                    if (!isset($grouped[$titleName])) {
                        $grouped[$titleName] = [];
                    }

                    $grouped[$titleName][] = [
                        'id' => $permission->id,
                        'name' => $permission->name
                    ];
                }
            }
        }

        return $grouped;
    }

    public function createUpdate(array $data)
    {
       
        $role = Auth::user()->roles->first();

        if (!$role) {
            return throw new \Exception('No role found');
        }
        
        return  $role->syncPermissions($permissionAssign);
    }
}
