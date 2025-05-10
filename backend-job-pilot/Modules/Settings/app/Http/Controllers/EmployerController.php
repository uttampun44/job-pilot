<?php

namespace Modules\Settings\app\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Auth;
use Modules\Settings\app\Http\Requests\EmployerInformationRequest;
use Modules\Settings\app\Repositories\EmployerRepositories;

class EmployerController extends Controller
{
    protected $employerRepository;
    public function __construct(EmployerRepositories $employerRepository)
    {
        $this->employerRepository = $employerRepository;
    }

    public function index()
    {
        return $this->employerRepository->fetchEmployers();
    }

    public function store(EmployerInformationRequest $request): JsonResponse
    {
        try {
            $user = Auth::user();

            if (!$user->hasRole('Employer')) {
                return response()->json([
                    'message' => 'You are not authorized to perform this action !',
                ], 401);
            }

            $data = $request->validated();
            $this->employerRepository->createUpdate($data);
            return response()->json([
                'message' => 'Employer created successfully !',
            ], 201);
        } catch (\Throwable $th) {
            return response()->json([
                'message' => $th->getMessage(),
            ], 500);
        }
    }
}
