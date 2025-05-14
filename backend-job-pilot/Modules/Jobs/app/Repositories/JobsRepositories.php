<?php

namespace Modules\Jobs\app\Repositories;

use Modules\Jobs\app\Models\Jobs;
use Modules\Jobs\app\Transformers\JobResource;

class JobsRepositories
{
    public function getAllJobs()
    {
       $jobs = Jobs::with('user.employerInformation')->get();
      
       return JobResource::collection($jobs);
    }
}