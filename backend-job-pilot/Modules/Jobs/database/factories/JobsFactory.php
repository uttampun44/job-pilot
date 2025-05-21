<?php

namespace Modules\Jobs\Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class JobsFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     */
    protected $model = \Modules\Jobs\app\Models\Jobs::class;

    /**
     * Define the model's default state.
     */
    public function definition(): array
    {
        
        // only employer role seed data
        $role =  User::role('Employer')->first();
        
        return [
            'title'               => $this->faker->sentence(rand(3, 6)),
            'job_description'     => $this->faker->paragraphs(2, true),
            'requirements'        => $this->faker->paragraphs(1, true),
            'desirable'           => $this->faker->paragraph(),
            'benefits'            => $this->faker->paragraph(),
            'job_type'            => $this->faker->randomElement(['Full-Time', 'Part-Time', 'Contract', 'Internship']),
            'job_benefits_tags'   => json_encode($this->faker->randomElements([
                'Flexible Hours',
                'Remote Work',
                'Health Insurance',
                'Paid Time Off',
                'Gym Membership'
            ], rand(1, 3))),
            'job_posted'          => now()->format('Y-m-d'),
            'job_expires'         => now()->addDays(rand(15, 60))->format('Y-m-d'),
            'job_location'        => $this->faker->city,
            'job_level'           => $this->faker->randomElement(['Entry', 'Mid', 'Senior', 'Lead']),
            'salary_start'        => $this->faker->numberBetween(30000, 70000),
            'salary_end'          => $this->faker->numberBetween(70001, 120000),
            'negotioable'         => $this->faker->boolean ? 'Yes' : 'No',
            'skills'            => json_encode($this->faker->randomElements([
                'React JS',
                'Node.js',
                'JavaScript',
                'Python',
                'C#',
                'Java',
                'PHP',
                'Laravel',
                'Vue.js',
                'React',
                'Docker',
                'AWS'
            ], rand(1, 6))),
            'role_id'             => $role?->id ?? 1,
            'user_id'             => $role?->user_id ?? 1,
        ];
    }
}
