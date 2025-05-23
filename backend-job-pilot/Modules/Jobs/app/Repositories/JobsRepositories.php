<?php

namespace Modules\Jobs\app\Repositories;

use Modules\Jobs\app\Models\Jobs;
use Modules\Jobs\app\Transformers\JobResource;
use App\Enum\IndustrySector;

class JobsRepositories
{
    public function getAllJobs()
    {
        $jobs = Jobs::with('user.employerInformation')->paginate(25);

        return JobResource::collection($jobs);
    }

    public function getJobById(int $id)
    {
        $job = Jobs::with('user.employerInformation')->find($id);
        return JobResource::make($job);
    }

    public function deleteJob(int $id)
    {
        $job = Jobs::find($id);
        $job->delete();
    }

    // these are the jobs will be shown on the homepage abd on the job details page

    public function showHomePageJobs()
    {
        $jobs = Jobs::with('user.employerInformation')->take(12)->get();

        return JobResource::collection($jobs);
    }

    public function showJobsDetails(int $id)
    {
        $job = Jobs::with('user.employerInformation')->find($id);
        return JobResource::make($job);
    }

    public function showAllJobs()
    {
        $jobs = Jobs::with('user.employerInformation')->paginate(30);

        return JobResource::collection($jobs);
    }

    public function searchJobs(string $search)
    {
         if(empty($search))
         {
             return $this->showAllJobs();
         }
        $jobs = Jobs::where(function ($query) use ($search) {
            return $query->where('job_level', 'like', '%' . $search . '%')
                ->orWhere('job_type', 'like', '%' . $search . '%')
                ->orWhere('job_location', 'like', '%' . $search . '%')
                ->orWhere('job_level', 'like', '%' . $search . '%');
        })->paginate(30);

        return JobResource::collection($jobs);
    }

    public function fetchIndustries()
    {
        return collect(IndustrySector::cases())->map(fn($industry) => [
        'label' => $industry->name,
        'value' => $industry->value
       ]);
    }
}
