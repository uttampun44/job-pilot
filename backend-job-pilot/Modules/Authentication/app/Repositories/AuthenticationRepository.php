<?php

namespace Modules\Authentication\app\Repositories;

use App\Models\Role;

class AuthenticationRepository
{
    public function fetchRoles()
    {
        $roles = Role::whereIn('name', ['candidate' ,'employer'])->select('id', 'name')->get();
        return $roles;
    }
}
