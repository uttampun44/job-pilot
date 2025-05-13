<?php

namespace Modules\Settings\Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Modules\Settings\app\Models\CandidateExperience;

class CandidateExperienceFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     */
    protected $model = CandidateExperience::class;

    /**
     * Define the model's default state.
     */
    public function definition(): array
    {
        return [
            'work_experience' => $this->faker->sentence,
            'skills' => json_encode( $this->faker->randomElement(['php', 'javascript', 'react' ])),
            'position' => $this->faker->sentence,
            'resume' => $this->faker->sentence,
            'about_me' => $this->faker->sentence,
            'candidate_id' => $this->faker->numberBetween(1, 704),
            'user_id' => $this->faker->numberBetween(1, 704),
        ];
    }
}

