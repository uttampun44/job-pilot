<?php

namespace Modules\Authentication\app\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\Authentication\app\Repositories\AuthenticationRepository;
use Modules\Authentication\app\Http\Requests\LoginRequest;
use Modules\Authentication\app\Http\Requests\RegisterRequest;

class AuthenticationController extends Controller {

    protected $authenticationRepository;

    public function __construct(AuthenticationRepository $authenticationRepository)
    {
        $this->authenticationRepository = $authenticationRepository;
    }
    
    public function fetchRoles()
    {
        $roles = $this->authenticationRepository->fetchRoles();
        return response()->json($roles);
    }

    public function postRegister(RegisterRequest $request)
    {
      try {
          $data = $request->validated();
          $this->authenticationRepository->postRegister($data);
          return response()->json(['message' => 'Registered successfully'], 201);
      } catch (\Throwable $th) {
          return response()->json(['message' => $th->getMessage()], 400);
      }
    }

    public function postLogin(LoginRequest $request)
    {
        try {
            $data = $request->validated();
            $this->authenticationRepository->postLogin($data);
            return response()->json(['message' => 'Login successful'], 200);
        } catch (\Throwable $th) {
            return response()->json(['message' => $th->getMessage()], 400);
        }
    }

    public function postLogout()
    {
        try {
            $this->authenticationRepository->postLogout();
            return response()->json(['message' => 'Logged out successfully'], 200);
        } catch (\Throwable $th) {
            return response()->json(['message' => $th->getMessage()], 400);
        }
    }

    public function postForgotPassword(array $data)
    {
        try {
            $this->authenticationRepository->postForgotPassword($data);
            return response()->json(['message' => 'Password reset link sent successfully'], 200);
        } catch (\Throwable $th) {
            return response()->json(['message' => $th->getMessage()], 400);
        }
    }

    public function postResetPassword(array $data)
    {
        try {
            $this->authenticationRepository->postResetPassword($data);
            return response()->json(['message' => 'Password reset successfully'], 200);
        } catch (\Throwable $th) {
            return response()->json(['message' => $th->getMessage()], 400);
        }
    }
}
