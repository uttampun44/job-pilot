<?php

use Illuminate\Support\Facades\Route;
use Modules\Settings\app\Http\Controllers\SettingsController;

Route::middleware(['auth', 'verified'])->group(function () {
    Route::resource('settings', SettingsController::class)->names('settings');
});
