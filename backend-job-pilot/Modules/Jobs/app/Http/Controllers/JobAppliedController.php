<?php

namespace Modules\Jobs\app\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Log;
use Modules\Jobs\app\Repositories\AppliedJobsRepositories;


class JobAppliedController extends Controller 
{
    protected $appliedJobsRepository;
    public function __construct(AppliedJobsRepositories $appliedJobsRepository)
    {
        $this->appliedJobsRepository = $appliedJobsRepository;  
    }

    public function frontendAppliedJobsStore(Request $request)
    {
        try {
            $this->appliedJobsRepository->frontendAppliedJobsStore($request->all());
            return response()->json(['message' => 'Job applied successfully !'], 201);
        } catch (\Throwable $th) {
            return response()->json(['message' => $th->getMessage()], 500);
        }
    }

    public function fetchBackendAppliedJobs()
    {
        $data = $this->appliedJobsRepository->fetchBackendAppliedJobs();
        return response()->json($data, 200);    
    }

    public function findAppliedJobs(int $id)
    {
        $data = $this->appliedJobsRepository->findAppliedJobs($id);
        return response()->json($data, 200);    
    }
}
