<?php

namespace Modules\Course\app\Repositories;

use Modules\Course\app\Models\CourseCategory;
use Modules\Course\app\Models\Course;

class CourseRepositories
{
    public function fetchCourseCategories()
    {
        $courses = CourseCategory::all();
        return $courses;
    }
    public function fetchCourses()
    {
        $courses = Course::paginate(10);
        return $courses;
    }

    public function storeCourse(array $data)
    {
       return Course::create($data);
    }

    public function fetchCourse($id)
    {
        $course = Course::find($id);
        return $course;
    }
   
    public function deleteCourse($id)
    {
        $course = Course::find($id);
        $course->delete();
        return $course;
    }   
}