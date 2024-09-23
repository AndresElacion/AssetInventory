<?php

namespace App\Models;

use App\Models\serverSpecs;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Client extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function serverSpecs() {
        return $this->hasMany(serverSpecs::class);
    }
}
