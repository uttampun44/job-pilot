<?php

namespace Modules\Course\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
// use Modules\Course\Database\Factories\CourseEntrollmentFactory;

class CourseEntrollment extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     */
    protected $fillable = [];

    // protected static function newFactory(): CourseEntrollmentFactory
    // {
    //     // return CourseEntrollmentFactory::new();
    // }
}
