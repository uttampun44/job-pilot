<?php

namespace Modules\Jobs\app\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Modules\Jobs\app\Repositories\JobsRepositories;

class JobsController extends Controller
{
     protected $jobsRepositories;
    public function __construct(JobsRepositories $jobsRepositories)
    {
        $this->jobsRepositories = $jobsRepositories;
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
       return $this->jobsRepositories->getAllJobs();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('jobs::create');
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
        return view('jobs::show');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        return view('jobs::edit');
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
