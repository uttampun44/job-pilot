<?php

use Illuminate\Support\Facades\Route;
use Modules\Course\Http\Controllers\CourseController;

Route::middleware(['auth', 'verified'])->group(function () {
    Route::resource('course', CourseController::class)->names('course');
});
