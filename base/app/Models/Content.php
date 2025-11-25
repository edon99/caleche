<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Content extends Model
{
    protected $fillable = ['key', 'value', 'type'];


    public function getFormattedValueAttribute()
    {
        if ($this->type === 'image') {
            return $this->value ? asset('storage/' . $this->value) : null;
        }

        return $this->value;
    }

    public function getTextAttribute()
    {
        return $this->type === 'text' ? $this->value : null;
    }
}
