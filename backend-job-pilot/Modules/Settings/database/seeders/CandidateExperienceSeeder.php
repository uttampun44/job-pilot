<?php

namespace Modules\Settings\Database\Seeders;

use Illuminate\Database\Seeder;
use Modules\Settings\app\Models\CandidateExperience;
use Modules\Settings\Database\Factories\CandidateExperienceFactory;

class CandidateExperienceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // $this->call([]);
       CandidateExperience::factory(700)->create();
    }
}
