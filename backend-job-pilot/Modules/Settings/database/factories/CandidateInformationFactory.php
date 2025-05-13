<?php

namespace Modules\Settings\Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Modules\Settings\app\Models\CandidateInformation;

class CandidateInformationFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     */
    protected $model = CandidateInformation::class;

    /**
     * Define the model's default state.
     */
    public function definition(): array
    {
        return [
            'image' => $this->faker->imageUrl,
            'date_of_birth' => $this->faker->date(),
            'nationality' => $this->faker->country,
            'gender' => $this->faker->randomElement(['Male', 'Female']),
            'marital_status' => $this->faker->randomElement(['Single', 'Married', 'Widowed']),
            'religion' => $this->faker->randomElement(['Islam', 'Christianity', 'Hinduism', 'Buddhism', 'Judaism', 'Sikhism', 'Other']),
            'education' => $this->faker->randomElement(['High School', 'College', 'Masters', 'Doctorate']),
            'phone_number' => $this->faker->phoneNumber,
            'address' => $this->faker->address,
            'user_id' => $this->faker->numberBetween(1, 704),
        ];
    }
}

