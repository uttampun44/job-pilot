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
}
