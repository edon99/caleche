<?php

namespace App\Filament\Resources\Items\Schemas;

use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Schemas\Schema;

class ItemUpdateForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('name')
                    ->required(),

                Textarea::make('description')
                    ->columnSpan(1),

                Select::make('category_id')
                    ->label('Category')
                    ->relationship('category', 'name')
                    ->required()
                    ->reactive(),


                Select::make('sub_category_id')
                    ->disabled(fn ($get) => !$get('category_id'))
                    ->label('Subcategory')
                    ->required()
                    ->options(function ($get) {
                        $categoryId = $get('category_id');

                        if (!$categoryId) {
                            return [];
                        }


                        return \App\Models\SubCategory::where('category_id', $categoryId)
                            ->pluck('name', 'id');
                    }),

                TextInput::make('price')
                    ->required()
                    ->numeric()
                    ->postfix('DA'),

                TextInput::make('old_price')
                    ->numeric()
                    ->postfix('DA'),

            ]);
    }
}
