<?php

namespace Modules\Course\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
// use Modules\Course\Database\Factories\ChargeFactory;

class Charge extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     */
    protected $table = 'course_payments';
    protected $fillable = [];

    // protected static function newFactory(): ChargeFactory
    // {
    //     // return ChargeFactory::new();
    // }
}
