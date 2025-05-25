<?php

use Illuminate\Support\Facades\Route;
use Modules\Jobs\app\Http\Controllers\JobsController;
use Modules\Jobs\app\Http\Controllers\FrontendJobsController;
use Modules\Jobs\app\Http\Controllers\JobAppliedController;
use Modules\Jobs\app\Http\Controllers\FavouriteJobController;

Route::middleware(['auth:sanctum'])->prefix('v1')->group(function () {
    Route::apiResource('jobs', JobsController::class)->names('jobs');
    Route::get('/apply-job/{id}', [JobAppliedController::class, 'findAppliedJobs'])->name('find-applied-job');
    Route::get('/favourite-job/{id}', [FavouriteJobController::class, 'findFavouriteJobs'])->name('find-favourite-job');
    Route::get('/apply-job', [JobAppliedController::class, 'fetchBackendAppliedJobs'])->name('fetch-applied-jobs');
    Route::delete('/apply-job/{id}', [JobAppliedController::class, 'destroyApplyJob'])->name('delete-applied-job');
   Route::get('/favourite-jobs', [FavouriteJobController::class, 'fetchFavouriteJobs'])->name('fetch-favourite-jobs');
  Route::delete('/favourite-job/{id}', [FavouriteJobController::class, 'destroyFavouriteJobs'])->name('delete-favourite-job');
  Route::get('/favourite-jobs', [FavouriteJobController::class, 'fetchFavouriteJobs'])->name('fetch-favourite-jobs');
});

 Route::get('/jobs/home-page-jobs', [FrontendJobsController::class, 'fetchHomePageJobs'])->name('home-page-jobs');
 Route::get('/jobs/{id}', [FrontendJobsController::class, 'fetchJobDetails'])->name('job-details');
 Route::get('/jobs', [FrontendJobsController::class, 'fetchHomePageJobs'])->name('all-jobs');
 Route::get('/jobs-lists', [FrontendJobsController::class, 'fetchAllJobs'])->name('job-list');
 Route::get('/search-jobs', [FrontendJobsController::class, 'searchJobs'])->name('search-jobs');
 Route::post('/apply-job', [JobAppliedController::class, 'frontendAppliedJobsStore'])->name('apply-job');
 Route::post('/favourite-jobs', [FavouriteJobController::class, 'favouriteJobsStore'])->name('favourite-job');