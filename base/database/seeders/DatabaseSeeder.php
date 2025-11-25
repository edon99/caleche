<?php

namespace Database\Seeders;

use App\Models\Admin;
use App\Models\Category;
use App\Models\SubCategory;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

//        User::factory()->create([
//            'name' => 'Test User',
//            'email' => 'test@example.com',
//        ]);
        Admin::factory()->create([
            'name' => 'Super Admin',
            'email' => 'admin@app.com',
            'password' => bcrypt('password'),
        ]);
        Category::factory()->create([
            'name' => 'Food',
            'description' => ''
        ]);
        Category::factory()->create([
            'name' => 'Drink',
            'description' => ''
        ]);
        SubCategory::factory()->create([
            'category_id' => '1',
            'name' => 'Pasta',
            'description' => 'Our fine pasta comes straight from italy.'
        ]);
        SubCategory::factory()->create([
            'category_id' => '2',
            'name' => 'Hot Drinks',
            'description' => 'Some Hot drinks that will make your morning brighter.'
        ]);
    }
}
