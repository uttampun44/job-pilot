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

        return response()->json([
            'categories' => $categories,
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
    public function store(Request $request) {}

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
        return view('course::edit');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id) {}

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id) {}
}
