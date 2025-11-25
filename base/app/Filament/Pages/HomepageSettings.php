<?php

namespace App\Filament\Pages;

use App\Filament\Resources\Contents\ContentResource;
use App\Models\Content;
use Filament\Forms;
use Filament\Forms\Components\TagsInput;
use Filament\Schemas\Components\Section;
use Filament\Forms\Concerns\InteractsWithForms;
use Filament\Forms\Contracts\HasForms;
use Filament\Schemas\Schema;
use Filament\Notifications\Notification;
//use Filament\Resources\Pages\Page;
use Filament\Pages\Page;
use Filament\Support\Icons\Heroicon;

class HomepageSettings extends Page implements HasForms
{
    use InteractsWithForms;


    protected static string|null|\BackedEnum $navigationIcon = Heroicon::Home;

    protected string $view = 'filament.resources.contents.pages.homepage-settings';

    protected static ?string $navigationLabel = 'Home Content';

    protected static ?string $slug = 'home';

    public ?array $data = [];

    public function mount(): void
    {
        $this->form->fill(
            Content::all()->mapWithKeys(function ($item) {
                if ($item->key === 'featured_ingredients') {
                    $value = $item->value ? explode(',', $item->value) : [];
                    return [$item->key => $value];
                }
                return [$item->key => $item->value];
            })->toArray()
        );
    }

    public function form(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make('Hero Section')->schema([
                    Forms\Components\TextInput::make('hero_title'),
                    Forms\Components\TextInput::make('hero_subtitle'),
                    Forms\Components\FileUpload::make('hero_image')
                        ->disk('public')
                        ->directory('content')
                        ->image(),
                ]),

                Section::make('Featured Product')->schema([
                    Forms\Components\TextInput::make('featured_title'),
                    Forms\Components\TagsInput::make('featured_ingredients')
                        ->label('Key Ingredients')
                        ->separator(',')
                        ->placeholder('Add ingredients'),
                    Forms\Components\Textarea::make('featured_description'),
                    Forms\Components\TextInput::make('featured_price')->numeric()->postfix('DA'),
                    Forms\Components\FileUpload::make('featured_image')
                        ->disk('public')
                        ->directory('content')
                        ->image(),
                ]),

                Section::make('Our Story')->schema([
                    Forms\Components\TextInput::make('story_title'),
                    Forms\Components\RichEditor::make('story_content'),
                    Forms\Components\FileUpload::make('story_image1')
                        ->disk('public')
                        ->directory('content')
                        ->image(),
                    Forms\Components\FileUpload::make('story_image2')
                        ->disk('public')
                        ->directory('content')
                        ->image(),
                ]),
            ])
            ->statePath('data');
    }

    public function submit(): void
    {
        foreach ($this->form->getState() as $key => $value) {

            if (is_array($value)) {
                $value = json_encode($value);
            }

            Content::updateOrCreate(
                ['key' => $key],
                [
                    'value' => $value,
                    'type'  => str_contains($key, 'image') ? 'image' : 'text',
                ]
            );
        }

        Notification::make()
            ->title('Homepage content updated!')
            ->success()
            ->send();
    }

}


