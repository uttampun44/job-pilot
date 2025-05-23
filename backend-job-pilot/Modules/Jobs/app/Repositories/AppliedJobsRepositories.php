<?php

namespace Modules\Jobs\app\Repositories;

class AppliedJobsRepositories
{
    public function frontendAppliedJobsStore(array $data)
    {
        return ApplyJob::create($data);
    }

    public function fetchBackendAppliedJobs(array $data)
    {
        return ApplyJob::where('user_id', $data['user_id'])->get();
    }
}