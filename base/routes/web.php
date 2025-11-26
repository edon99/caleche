<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    $content = \App\Models\Content::all()->mapWithKeys(function ($item) {
        return [$item->key => $item->formatted_value];
    });

    $foodItems = \App\Models\Item::whereHas('sub_category', function($query){
        $query->whereHas('category', function($query){
            $query->where('name', 'Food');
        });
    })->with('sub_category')->get();

    $drinkItems = \App\Models\Item::whereHas('sub_category', function($query){
        $query->whereHas('category', function($query){
            $query->where('name', 'Drink');
        });
    })->with('sub_category')->get();

    return inertia('Welcome', [
        'content' => $content,
        'foodItems' => $foodItems,
        'drinkItems' => $drinkItems,
    ]);
});
