<?php

use Illuminate\Support\Facades\Route;
use Modules\Jobs\app\Http\Controllers\JobsController;

Route::middleware(['auth:sanctum'])->prefix('v1')->group(function () {
    Route::apiResource('jobs', JobsController::class)->names('jobs');
});

 Route::apiResource('jobs', JobsController::class)->names('jobs');