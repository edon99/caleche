<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Item;
use App\Http\Requests\StoreItemRequest;
use App\Http\Requests\UpdateItemRequest;

class WebsiteController extends Controller
{
    public function getItems(){

        $items = Item::all()->select(['name','price','old_price','sub_category']);

        return response()->json(['type'=>'success','items'=>$items]);
    }

    public function getFoodItems(){

        $items = Item::whereHas('sub_category', function($query){
            $query->whereHas('category', function($query){
                $query->where('name', 'Food');
            });
        })->get()->select(['image_url','name','price','description','old_price','sub_category']);


        return response()->json(['type'=>'success','items'=>$items]);
    }

    public function getDrinkItems(){

        $items = Item::whereHas('sub_category', function($query){
            $query->whereHas('category', function($query){
                $query->where('name', 'Drink');
            });
        })->get()->select(['image_url','name','price','description','old_price','sub_category']);


        return response()->json(['type'=>'success','items'=>$items]);
    }

    public function homeContent()
    {
        $content = \App\Models\Content::all()->mapWithKeys(function ($item) {
            return [$item->key => $item->formatted_value];
        });

        return response()->json([
            'type' => 'success',
            'content' => $content
        ]);
    }
}
