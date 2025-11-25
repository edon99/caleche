<?php

namespace App\Filament\Resources\Items\Schemas;

use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Schemas\Components\Utilities\Get;
use Filament\Schemas\Components\Utilities\Set;
use Filament\Schemas\Schema;
//use Filament\Forms\Get;
//use Filament\Forms\Set;
use Illuminate\Database\Eloquent\Builder;

class ItemForm
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
                    ->live()
                    ->afterStateUpdated(fn (Set $set) => $set('sub_category_id', null)), // Reset subcat if cat changes

                Select::make('sub_category_id')
                    ->label('Subcategory')
                    ->required()
                    ->disabled(fn (Get $get) => !$get('category_id'))
                    ->relationship(
                        name: 'sub_category',
                        titleAttribute: 'name',
                        modifyQueryUsing: fn (Builder $query, Get $get) =>
                        $query->where('category_id', $get('category_id'))
                    ),


                TextInput::make('price')
                    ->required()
                    ->numeric()
                    ->postfix('DA'),

                FileUpload::make('image')
                    ->label('Item Image')
                    ->image()
                    ->directory('items')
                    ->disk('public')
                    ->maxSize(1024)
                    ->required()



            ]);

    }
}
