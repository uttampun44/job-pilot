<?php

namespace Modules\Course\app\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Modules\Course\Database\Factories\CourseFactory;

class Course extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     */
    protected $fillable = [
        'name',
        'short_description',
        'course_details',
        'career_outcomes',
        'image',
        'course_type',
        'price',
        'duration',
        'course_category_id'
    ];

    protected static function newFactory(): CourseFactory
    {
        return CourseFactory::new();
    }
}
