<?php

namespace Modules\Authentication\Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class UserFactoryFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     */
    protected $model = \Modules\Authentication\Models\UserFactory::class;

    /**
     * Define the model's default state.
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->name,
            'email' => $this->faker->unique()->safeEmail,
            'password' => Hash::make('password'),
        ];
    }
}

