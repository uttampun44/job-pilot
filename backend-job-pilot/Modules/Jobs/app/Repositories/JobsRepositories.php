<?php

namespace Modules\Jobs\app\Repositories;

use Modules\Jobs\app\Models\Jobs;

class JobsRepositories
{
    public function getAllJobs(): array
    {
        return Jobs::role('Employer')->get();
    }
}