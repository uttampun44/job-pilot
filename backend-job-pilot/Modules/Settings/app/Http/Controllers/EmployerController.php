<?php

namespace Modules\Settings\app\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Modules\Settings\app\Repositories\EmployerInformationRepositories;

class EmployerController extends Controller
{
    protected $employerRepository;
    public function __construct(EmployerInformationRepositories $employerRepository)
    {
        $this->employerRepository = $employerRepository;
    }

    public function index()
    {
        return $this->employerRepository->fetchEmployer();
    }

    public function getIndustries()
    {
        $data = $this->employerRepository->fetchEmployerIndustries();
        return response()->json($data, 200);
    }

    public function store(Request $request)
    {        
        try {
            $user = Auth::user();

            if (!$user->hasRole(['Employer', 'Super Admin', 'Admin'])) {
                return response()->json([
                    'message' => 'You are not authorized to perform this action !',
                ], 401);
            }
             
            $data = $request->all();
            
            $this->employerRepository->createUpdate($data);
            return response()->json([
                'message' => 'Employer Information created successfully !',
            ], 201);
        } catch (\Throwable $th) {
            Log::error($th->getMessage());
            return response()->json([
                'message' => $th->getMessage(),
            ], 500);
        }
    }
}
