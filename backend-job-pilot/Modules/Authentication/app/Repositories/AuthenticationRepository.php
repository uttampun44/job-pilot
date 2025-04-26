<?php

namespace Modules\Authentication\app\Repositories;

use App\Models\User;
use Illuminate\Container\Attributes\Auth;

class AuthenticationRepository
{
    public function postCreateUser(array $data): User
    {
        $user =  User::where('email', $data['email'])->first();

        if ($user) {
            return $user;
        }
        return User::create($data);
    }

    public function postLoginUser(array $data): User
    {
        $loginUser =  Auth::attempt(['email' => $data['email'], 'password' => $data['password']]);

        if (!Auth::attempt($loginUser)) {
            return throw new \Exception('Invalid Credentials');
        }

        return $loginUser;
    }
}
