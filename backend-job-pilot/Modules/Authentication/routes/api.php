<?php

use Illuminate\Support\Facades\Route;
use Modules\Authentication\app\Http\Controllers\AuthenticationController;

// use Modules\Authentication\Http\Controllers\AuthenticationController;

Route::middleware(['auth:sanctum'])->prefix('v1')->group(function () {
    // Route::apiResource('authentication', AuthenticationController::class)->names('authentication');
});
Route::prefix('v1')->group(function () {
    Route::get('all-roles', [AuthenticationController::class, 'fetchRoles'])->name('authentication.fetchRoles');
});
