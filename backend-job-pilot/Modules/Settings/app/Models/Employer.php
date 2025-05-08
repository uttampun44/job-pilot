<?php

namespace Modules\Settings\app\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
// use Modules\Settings\Database\Factories\EmployerFactory;

class Employer extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     */
    protected $table = 'employer_informations';
    protected $fillable = [];

    // protected static function newFactory(): EmployerFactory
    // {
    //     // return EmployerFactory::new();
    // }
}
