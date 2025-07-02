<?php 

namespace Modules\Course\app\Repositories;
use Modules\Course\app\Models\CourseEntrollment;
class CourseEnrollRepositories
{
    // public function enrollCourse($id)
    // {
    //     $course = Course::find($id);
    //     return $course;
    // }
    // public function unenrollCourse($id)
    // {
    // }

     public function postCourseEnrollment(array $data)
     {
            $courseEnrollment = CourseEntrollment::create($data);
            return $courseEnrollment;
     }
}