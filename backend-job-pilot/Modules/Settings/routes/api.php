<?php

use Illuminate\Support\Facades\Route;
use Modules\Settings\app\Http\Controllers\SettingsController;

Route::middleware(['auth:sanctum'])->prefix('v1')->group(function () {
    Route::apiResource('settings', SettingsController::class)->names('settings');
    Route::apiResource('candidate-profile', CandidateProfileController::class)->names('candidate-profile');
    Route::get('employer-profile', [EmployerProfileController::class, 'index'])->name('employer-profile');
    Route::post('employer-profile', [EmployerProfileController::class, 'store'])->name('employer-profile');
    Route::apiResource('permission', PermissionController::class)->names('permission');
});
