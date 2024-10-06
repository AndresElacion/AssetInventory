<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ServerSpecsController;
use App\Http\Controllers\Auth\RegisteredUserController;

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
    Route::resource('/specs', ServerSpecsController::class);
    Route::get('/clients/{client}/specs/create', [ServerSpecsController::class, 'create'])->name('serverSpecs.create');
    Route::get('/clients/{client}/specs/{spec}/edit', [ServerSpecsController::class, 'edit'])->name('serverSpecs.edit');
    Route::get('/create/user', [RegisteredUserController::class, 'create'])
                ->name('user.create');
    Route::post('/add/user', [RegisteredUserController::class, 'store'])->name('user.store');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
