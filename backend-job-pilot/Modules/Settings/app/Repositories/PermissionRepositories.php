<?php

namespace Modules\Settings\app\Repositories;
use App\Models\Role;
use App\Models\PermissionTitle;
use Illuminate\Support\Facades\DB;
use App\Models\User;

class PermissionRepositories
{
    public function fetchRoles()
    {
        return Role::query()->select('id', 'name')->get()->toArray();
    }

    public function fetchPermissions()
    {
        return PermissionTitle::with("permissions")->select('id', 'name')->get()->toArray();
    }

    public function createUpdate(array $data)
    {
        $auth_user = auth()->user();

        if(!$auth_user) {
            return throw new \Exception('Not logged in');
        }

        $user = User::find($auth_user->id);

        $role = Role::find($auth_user->roles->pluck('name')->first());

        if(!$role) {
            return throw new \Exception('No role found');
        }
        
        $permissions = DB::table('model_has_permissions')->updateOrInsert([
            'model_type' => $user;
            'permission_id' => $data['permission_id'];
        ])

       return  $role->syncPermissions($permissions);
    }
}