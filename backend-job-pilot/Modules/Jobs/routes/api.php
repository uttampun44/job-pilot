<?php

use Illuminate\Support\Facades\Route;
use Modules\Jobs\app\Http\Controllers\JobsController;
use Modules\Jobs\app\Http\Controllers\FrontendJobsController;

Route::middleware(['auth:sanctum'])->prefix('v1')->group(function () {
    Route::apiResource('jobs', JobsController::class)->names('jobs');
});

 Route::get('/jobs/home-page-jobs', [FrontendJobsController::class, 'fetchHomePageJobs'])->name('home-page-jobs');
 Route::get('/jobs/{id}', [FrontendJobsController::class, 'fetchJobDetails'])->name('job-details');
 Route::get('/jobs', [FrontendJobsController::class, 'fetchAllJobs'])->name('all-jobs');