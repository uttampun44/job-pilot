<?php

use Illuminate\Support\Facades\Route;

Route::middleware(['auth', 'verified'])->group(function () {
    // Route::resource('authentication', AuthenticationController::class)->names('authentication');
});
