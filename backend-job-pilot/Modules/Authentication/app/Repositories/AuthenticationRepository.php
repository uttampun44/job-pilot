<?php

namespace Modules\Authentication\app\Repositories;

use App\Models\Role;
use App\Models\User;

class AuthenticationRepository
{
    public function fetchRoles()
    {
        $roles = Role::whereIn('name', ['candidate' ,'employer'])->select('id', 'name')->get();
        return $roles;
    }

    public function postRegister(array $data)
    {
       $checkEmail = User::where('email', $data['email'])->first();
       
       if($checkEmail){
           return response()->json(['message' => 'Email already exists'], 400);
       }

       return User::createOrUpdate([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
            'role_id' => $data['role_id'],
        ]);

    }

    public function postLogin(array $data)
    {
        $user = User::where('email', $data['email'])->first();
        if (!$user) {
            return response()->json(['message' => 'Invalid email or password'], 400);
        }
        
    }
    
}
