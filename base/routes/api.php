<?php

use App\Http\Controllers\API\WebsiteController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::get('/items', [WebsiteController::class, 'getItems']);
Route::get('/foods', [WebsiteController::class, 'getFoodItems']);
Route::get('/drinks', [WebsiteController::class, 'getDrinkItems']);
Route::get('/home-content', [WebsiteController::class, 'homeContent']);
