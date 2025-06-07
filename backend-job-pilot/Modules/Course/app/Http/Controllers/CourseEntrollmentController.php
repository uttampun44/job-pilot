<?php

namespace Modules\Course\Http\Controllers;

use Illuminate\Routing\Controller;
use Modules\Course\app\Repositories\CourseEnrollRepositories;
use Modules\Course\Http\Requests\CoureseEnrollmentRequest;

class CourseEntrollmentController extends Controller {
    
    protected $courseEnrollmentRepository;

    public function __construct(CourseEnrollRepositories $courseEnrollmentRepository) 
    {
        $this->courseEnrollmentRepository = $courseEnrollmentRepository;
    }
    
    public function store(CoureseEnrollmentRequest $request)
    {
        try {
             $data = $request->validated();
             $this->courseEnrollmentRepository->postCourseEnrollment($data);
             return response()->json(['message' => 'Course enrollment successful!'], 201);
        } catch (\Throwable $th) {
            return response()->json(['message' => $th->getMessage()], 500);
        }
    }
}
