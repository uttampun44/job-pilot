<?php

namespace Modules\Course\Database\Seeders;

use App\Enum\CourseCategory as EnumCourseCategory;
use Illuminate\Database\Seeder;
use Modules\Course\app\Models\CourseCategory;
use Illuminate\Support\Str;

class CourseDatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // $this->call([]);
        $this->call([CourseSeeder::class]);
        
        // $courseCategories = EnumCourseCategory::cases();

        // foreach ($courseCategories as $category) {
        //     CourseCategory::create([
        //         'name' => $category->value,
        //         'slug' => Str::slug($category->value, '-'),
        //     ]);
        // }
    }
}
