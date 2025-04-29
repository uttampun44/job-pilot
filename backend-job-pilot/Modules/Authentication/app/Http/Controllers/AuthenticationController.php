<?php

namespace Modules\Authentication\app\Http\Controllers;

use Illuminate\Routing\Controller;
use Modules\Authentication\app\Repositories\AuthenticationRepository;

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

    public function postRegister(array $data)
    {
      try {
          $this->authenticationRepository->postRegister($data);
          return response()->json(['message' => 'Registered successfully'], 201);
      } catch (\Throwable $th) {
          return response()->json(['message' => $th->getMessage()], 400);
      }
    }
}
