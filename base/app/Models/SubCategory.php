<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Str;

class SubCategory extends Model

{
    use HasFactory;
    protected $fillable =[
        'name',
        'description',
        'slug',
        'category_id',
    ];

    protected static function booted()
    {
        static::creating(function (SubCategory $category) {
            if (empty($category->slug)) {
                $category->slug = Str::slug($category->name);
            }
        });

        static::updating(function (SubCategory $category) {
            if ($category->isDirty('name')) {
                $category->slug = Str::slug($category->name);
            }
        });
    }

    public function category(): BelongsTo
        {
            return $this->belongsTo(Category::class);
        }
}
