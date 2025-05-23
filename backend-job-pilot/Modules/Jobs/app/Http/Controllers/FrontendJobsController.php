<?php

namespace Modules\Jobs\app\Http\Controllers;

use Illuminate\Routing\Controller;
use Modules\Jobs\app\Repositories\JobsRepositories;

class FrontendJobsController extends Controller
{
   protected $jobsRepositories;
   public function __construct(JobsRepositories $jobsRepositories)
   {
      $this->jobsRepositories = $jobsRepositories;
   }

   public function fetchHomePageJobs()
   {
      $jobs = $this->jobsRepositories->showHomePageJobs();
      $industries = $this->jobsRepositories->fetchIndustries();

      return  [
         'jobs' => $jobs,
         'industries' => $industries
      ];
   }

   public function fetchJobDetails(int $id)
   {
      return $this->jobsRepositories->showJobsDetails($id);
   }

   public function fetchAllJobs()
   {
      return $this->jobsRepositories->showAllJobs();
   }

   public function searchJobs(string $search)
   {
      return $this->jobsRepositories->searchJobs($search);
   }
}
