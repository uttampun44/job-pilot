<?php

namespace Modules\Course\app\Repositories;

use Modules\Course\app\Models\CourseCategory;

class CourseRepositories
{
    public function fetchCourseCategories()
    {
        $courses = CourseCategory::all();
        return $courses;
    }
    // public function fetchCourses()
    // {
    //     $courses = Course::all();
    //     return $courses;
    // }
    // public function storeCourse(array $data)
    // {

    // }
    // public function fetchCourse($id)
    // {
    //     $course = Course::find($id);
    //     return $course;
    // }
    // public function updateCourse($id, array $data)
    // {
    // }
    // public function deleteCourse($id)
    // {
    // }   
}