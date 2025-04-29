<?php

use Illuminate\Support\Facades\Route;
use Modules\Authentication\app\Http\Controllers\AuthenticationController;

// use Modules\Authentication\Http\Controllers\AuthenticationController;

Route::middleware(['auth:sanctum'])->prefix('v1')->group(function () {
    // Route::apiResource('authentication', AuthenticationController::class)->names('authentication');
    Route::post('forgot-password', [AuthenticationController::class, 'postForgotPassword'])->name('authentication.forgotPassword');
    Route::post('reset-password', [AuthenticationController::class, 'postResetPassword'])->name('authentication.resetPassword');
    Route::post('logout', [AuthenticationController::class, 'postLogout'])->name('authentication.logout');
});
Route::prefix('v1')->group(function () {
    Route::post('register', [AuthenticationController::class, 'postRegister'])->name('authentication.register');
    Route::post('login', [AuthenticationController::class, 'postLogin'])->name('authentication.login');
});

Route::prefix('v1')->group(function () {
    Route::get('all-roles', [AuthenticationController::class, 'fetchRoles'])->name('authentication.fetchRoles');
});
