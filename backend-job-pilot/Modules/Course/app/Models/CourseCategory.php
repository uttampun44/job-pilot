<?php

namespace Modules\Course\app\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
// use Modules\Course\Database\Factories\CourseCategoryFactory;

class CourseCategory extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     */
    protected $table = 'course_categories';
    protected $fillable = [];

    // protected static function newFactory(): CourseCategoryFactory
    // {
    //     // return CourseCategoryFactory::new();
    // }
}
