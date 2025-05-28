<?php 

namespace Modules\Course\app\Repositories;

class CourseEnrollRepositories
{
    public function enrollCourse($id)
    {
        $course = Course::find($id);
        return $course;
    }
    public function unenrollCourse($id)
    {
    }
}