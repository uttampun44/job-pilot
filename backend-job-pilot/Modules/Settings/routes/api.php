<?php

use Illuminate\Support\Facades\Route;
use Modules\Settings\app\Http\Controllers\SettingsController;
use Modules\Settings\app\Http\Controllers\CandidateProfileController;
use Modules\Settings\app\Http\Controllers\EmployerController;
use Modules\Settings\app\Http\Controllers\PermissionController;

Route::middleware(['auth:sanctum'])->prefix('v1')->group(function () {
    Route::apiResource('settings', SettingsController::class)->names('settings');
    Route::apiResource('candidate-profile', CandidateProfileController::class)->names('candidate-profile');
    Route::get('employer-profile', [EmployerController::class, 'index'])->name('employer-profile');
    Route::post('employer-profile', [EmployerController::class, 'store'])->name('employer-profile');
    Route::apiResource('permission', PermissionController::class)->only(['index', 'store']);
});
