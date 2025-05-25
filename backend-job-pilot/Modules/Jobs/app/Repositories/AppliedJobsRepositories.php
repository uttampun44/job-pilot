<?php

namespace Modules\Jobs\app\Repositories;

use Modules\Jobs\app\Models\ApplyJob;
use Illuminate\Support\Str;

class AppliedJobsRepositories
{
    public function fetchBackendAppliedJobs()
    {
        return ApplyJob::with('user')->paginate(10);
    }

    public function findAppliedJobs(int $id)
    {
        return ApplyJob::with('user')->where('job_id', $id)->get();
    }

    public function frontendAppliedJobsStore(array $data)
    {
        $exists = ApplyJob::where('job_id', $data['job_id'])
            ->where('user_id', $data['user_id'])
            ->exists();

        if ($exists) {
            throw new \Exception('You have already applied for this job.');
        }
        if (isset($data['resume']) && $data['resume'] instanceof \Illuminate\Http\UploadedFile) {
            $uuid = Str::uuid()->toString();
            $imageName =  $uuid . '.' . $data['resume']->getClientOriginalExtension();
            $data['resume']->move(public_path('apply-jobs/resumes'), $imageName);
            $data['resume'] = $imageName;
        }
        return ApplyJob::create($data);
    }

    public function findApplyJob(int $id)
    {
        return ApplyJob::with('user')->where('job_id', $id)->get();
    }

    public function destroyApplyJob(int $id)
    {
        return ApplyJob::destroy($id);
    }
}
