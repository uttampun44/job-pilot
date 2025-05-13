<?php

namespace Modules\Settings\Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class EmployerInformationFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     */
   protected $model = \Modules\Settings\app\Models\EmployerInformation::class;
    /**
     * Define the model's default state.
     */
    public function definition(): array
    {
        return [
            'company_name' => $this->faker->name,
            'company_address' => $this->faker->address,
            'company_phone_number' => $this->faker->phoneNumber,
            'company_email' => $this->faker->unique()->safeEmail,
            'company_website_url' => $this->faker->url,
            'linkedin_url' => $this->faker->url,
            'industry' => $this->faker->randomElement([
                'Health Sector',
                'Education Sector',
                'Finance Sector',
                'IT Sector',
                'Pharmaceutical Sector',
                'Retail Sector',
                'Telecommunication Sector',
                'Transport Sector',
                'Utilities Sector',
                'Other Sector',
            ]),

            'company_size' => $this->faker->numberBetween(1, 100),
            'founded_year' => $this->faker->year,
            'logo' => $this->faker->imageUrl,
            'user_id' => $this->faker->numberBetween(1, 704),
        ];
    }
}
