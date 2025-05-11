<?php

namespace Modules\Settings\app\Repositories;

use App\Models\Permission;
use App\Models\Role;
use Illuminate\Support\Str;

class PermissionRepositories
{
    public function fetchRoles()
    {
        return Role::query()->select('id', 'name')->get()->toArray();
    }

    public function fetchPermissions($roleId)
    {
         $role = Role::with('permissions')->findOrFail($roleId);
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
                        'name' => $permission->name,
                        'selected' => $role->permissions->contains('id', $permission->id),
                    ];
                }
            }
        }

        return $grouped;
    }

    public function createUpdatePermission(array $data)
    {
        $role = Role::find($data['role_id']);
        
        $permissions = $data['permissions'];

        return  $role->syncPermissions($permissions);
    }
}
