<?php

namespace Modules\Jobs\app\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Modules\Jobs\Database\Factories\JobsFactory;

class Jobs extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     */
    protected $table = 'jobs';
    protected $fillable = [];

    protected static function newFactory(): JobsFactory
    {
        return JobsFactory::new();
    }
}
