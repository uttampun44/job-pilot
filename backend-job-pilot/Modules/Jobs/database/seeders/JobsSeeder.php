<?php

namespace Modules\Jobs\Database\Seeders;

use Illuminate\Database\Seeder;
use Modules\Jobs\app\Models\Jobs as ModelsJobs;

class JobsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // $this->call([]);
       ModelsJobs::factory(2000)->create();
    }
}
