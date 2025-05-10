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
    Route::apiResource('permission', PermissionController::class)->only(['index', 'store']);
    Route::post('employer-information', [EmployerController::class, 'store'])->name('employer-information');
});
Route::prefix('v1')->group(function () {
});
