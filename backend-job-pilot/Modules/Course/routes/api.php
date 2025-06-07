<?php

use Illuminate\Support\Facades\Route;
use Modules\Course\app\Http\Controllers\CourseController;

Route::middleware(['auth:sanctum'])->prefix('v1')->group(function () {
    Route::apiResource('course', CourseController::class)->only(['index',  'store', 'update', 'destroy']);
    Route::get('course/create', [CourseController::class, 'store'])->name('course.create');
});
