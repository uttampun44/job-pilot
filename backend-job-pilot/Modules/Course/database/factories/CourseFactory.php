<?php

namespace Modules\Course\Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class CourseFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     */
    protected $model = \Modules\Course\app\Models\Course::class;

    /**
     * Define the model's default state.
     */
    public function definition(): array
    {
        return [
             'name' => $this->faker->name,
            'short_description' => $this->faker->sentence,
            'course_details' => $this->faker->paragraphs(2, true),
            'career_outcomes' => $this->faker->paragraphs(1, true),
            'image' => $this->faker->imageUrl(),
            'course_type' => $this->faker->randomElement(['Online', 'Offline']),
            'price' => $this->faker->numberBetween(100, 1000),
            'duration' => $this->faker->numberBetween(1, 10),
            'course_category_id' => $this->faker->numberBetween(1, 5),
        ];
    }
}

