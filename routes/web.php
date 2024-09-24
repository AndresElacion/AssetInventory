<?php

use App\Http\Controllers\ClientController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ServerSpecsController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::middleware(['auth', 'verified'])->group(function() {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
    Route::resource('/client', ClientController::class);
    Route::get('/specs/create/{client}', [ServerSpecsController::class, 'create'])->name('specs.create');
    Route::post('/specs/store', [ServerSpecsController::class, 'store'])->name('specs.store');
    // Route::get('/specs/{id}/edit', [ServerSpecsController::class, 'edit'])->name('specs.edit');
    // Route::put('/specs/{id}', [ServerSpecsController::class, 'update'])->name('specs.update');

    Route::resource('/specs', ServerSpecsController::class);
    Route::get('/clients/{client}/specs/create', [ServerSpecsController::class, 'create'])->name('serverSpecs.create');

});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
