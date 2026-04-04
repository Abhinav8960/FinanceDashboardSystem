<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\api\DashboardController;
use App\Http\Controllers\Api\FinancialRecordController;
use App\Http\Controllers\Api\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::middleware(['auth:sanctum', 'role:admin'])->group(function () {
    Route::apiResource('users', UserController::class);
});

Route::middleware(['auth:sanctum', 'role:analyst,admin'])->group(function () {
    Route::apiResource('financial-records', FinancialRecordController::class);
});

Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index']);
});

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
