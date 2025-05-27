<?php

namespace Modules\Authentication\app\Repositories;

use App\Models\Role;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Modules\Authentication\Models\ForgotPassword;
use App\Mail\ResetPassword;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;
use Carbon\Carbon;

class AuthenticationRepository
{
    public function fetchRoles()
    {
        $roles = Role::whereIn('name', ['candidate', 'employer'])->select('id', 'name')->get();
        return $roles;
    }

    public function postRegister(array $data)
    {
        $checkEmail = User::where('email', $data['email'])->first();

        if ($checkEmail) {
           throw new \Exception('Email already exists');
        }

        $user =  User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
            'email_verified_at' => Carbon::now(),
        ]);

        if ($data['role'] == 'Employer') {
            $user->assignRole('Employer');
        } else {
            $user->assignRole('Candidate');
        }

        return $user;
    }

    public function postLogin(array $data)
    {
        $user = User::where('email', $data['email'])->first();

        if (!$user || !Hash::check($data['password'], $user->password)) {
            throw new \Exception('Invalid email or password');
        }

        $userSelectDetails = $user->only(['id', 'name', 'email']);

        $plainTextToken = $user->createToken('auth_token')->plainTextToken;

        return [
            'user' => $userSelectDetails,
            'token' => $plainTextToken,
            'role' => $user->getRoleNames()->first(),
        ];
    }

    public function postLogout()
    {
        $user = Auth::user();
        if (!$user) {
            return response()->json(['message' => 'Not logged in'], 400);
        }
        $user->currentAccessToken()->delete();
        return response()->json(['message' => 'Logged out successfully'], 200);
    }

    public function postForgotPassword(array $data)
    {
        $user = User::where('email', $data['email'])->first();
        if (!$user) {
            return response()->json(['message' => 'Email not found'], 400);
        }

        $checkPassword = ForgotPassword::where('email', $user->email)->first();
        if ($checkPassword) {
            return response()->json(['message' => 'Password reset link already sent'], 400);
        }

        $passwordCode =  ForgotPassword::create([
            'email' => $user->email,
            'code' => Str::random(60),
            'user_id' => $user->id,
        ]);

        Mail::to($user->email)->send(new ResetPassword($passwordCode));

        return response()->json(['message' => 'Password reset link sent successfully'], 200);
    }

    public function postResetPassword(array $data)
    {
        $user = User::where('email', $data['email'])->first();
        if (!$user) {
            return response()->json(['message' => 'Invalid email'], 400);
        }

        $checkPassword = ForgotPassword::where('email', $user->email)->first();
        if (!$checkPassword) {
            return response()->json(['message' => 'Invalid email'], 400);
        }

        $user->password = Hash::make($data['password']);
        $user->save();
        $checkPassword->delete();
        return response()->json(['message' => 'Password reset successfully'], 200);
    }
}
