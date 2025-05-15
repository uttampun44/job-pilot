<?php

namespace Modules\Jobs\app\Repositories;

use Modules\Jobs\app\Models\Jobs;
use Modules\Jobs\app\Transformers\JobResource;

class JobsRepositories
{
    public function getAllJobs()
    {
       $jobs = Jobs::with('user.employerInformation')->paginate(50);
      
       return JobResource::collection($jobs);
    }
}