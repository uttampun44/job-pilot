<?php

namespace Modules\Course\app\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Modules\Course\app\Repositories\CourseRepositories;

class CourseController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    protected $courseRepository;
    public function __construct(CourseRepositories $courseRepository)
    {
        $this->courseRepository = $courseRepository;
    }
    public function index()
    {
        $categories = $this->courseRepository->fetchCourseCategories();
        $courses = $this->courseRepository->fetchCourses();
        return response()->json([
            'categories' => $categories,
            'courses' => $courses,
        ], 200);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('course::create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CourseRequest $request) 
    {
       try {
           $data = $request->validated();
           $this->courseRepository->createCourse($data);
           return response()->json([
               'message' => 'Course created successfully',
           ], 201);
       } catch (\Throwable $th) {
           return response()->json([
               'message' => $th->getMessage(),
           ], 400);
       }    
    }

    /**
     * Show the specified resource.
     */
    public function show($id)
    {
        return view('course::show');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $course = $this->courseRepository->fetchCourse($id);
        return response()->json([
            'course' => $course,
        ], 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id) {}

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id) 
    {
        $this->courseRepository->deleteCourse($id);
        return response()->json([
            'message' => 'Course deleted successfully',
        ], 200);
    }
}
