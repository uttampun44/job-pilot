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
                Log::info('Job applied request received'); // add this

            $this->appliedJobsRepository->frontendAppliedJobsStore($request->all());
            return response()->json(['message' => 'Job applied successfully !'], 201);
        } catch (\Throwable $th) {
              Log::error('Job application error: ' . $th->getMessage());
            return response()->json(['message' => $th->getMessage()], 500);
        }
    }

    public function fetchBackendAppliedJobs()
    {
        $data = $this->appliedJobsRepository->fetchBackendAppliedJobs();
        return response()->json($data, 200);    
    }
}
