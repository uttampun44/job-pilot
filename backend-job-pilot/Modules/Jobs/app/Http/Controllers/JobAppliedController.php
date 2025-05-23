<?php

namespace Modules\Jobs\Http\Controllers;

use Illuminate\Routing\Controller;

class JobAppliedController extends Controller 
{
    protected $appliedJobsRepository;
    public __construct(AppliedJobsRepositories $appliedJobsRepository)
    {
        $this->appliedJobsRepository = $appliedJobsRepository;  
    }

    public function frontendAppliedJobsStore(App $data)
    {
        try {
            $data = validate($data);
            $this->appliedJobsRepository->frontendAppliedJobsStore($data);
            return response()->json(['message' => 'Job applied successfully !'], 201);
        } catch (\Throwable $th) {
            Log::error($th->getMessage());
            return response()->json(['message' => $th->getMessage()], 500);
        }
    }

    public function fetchBackendAppliedJobs()
    {
        $data = $this->appliedJobsRepository->fetchBackendAppliedJobs();
        return response()->json($data, 200);    
    }
}
