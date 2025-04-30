<?php

namespace Modules\Authentication\app\Repositories;

use App\Models\Role;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Modules\Authentication\Models\ForgotPassword;
use App\Mail\ResetPassword;
use Illuminate\Support\Facades\Mail;

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
            'password' => Hash::make($data['password']),
            'role_id' => $data['role_id'],
        ]);

    }

    public function postLogin(array $data)
    {
        $user = User::where('email', $data['email'])->first();
        if (!$user && !Hash::check($data['password'], $user->password)) {
            return response()->json(['message' => 'Invalid email or password'], 400);
        }

        return response()->json([
            'message' => 'Login successful',
            'token' => auth()->user->createToken('auth_token')->plainTextToken,
        ]);
        
    }

    public function postLogout()
    {    
        $user = Auth::user();
        if(!$user){
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
            'code' => str_random(60),
            'user_id' => $user->id,
        ]);

        Mail::to($request->user())->send(new ResetPassword);

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
