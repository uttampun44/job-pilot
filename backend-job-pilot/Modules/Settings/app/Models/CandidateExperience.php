<?php

namespace Modules\Settings\app\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
// use Modules\Settings\Database\Factories\CandidateExperienceFactory;

class CandidateExperience extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     */
    protected $table = 'candidate_work_experiences';
    protected $fillable = [];

    // protected static function newFactory(): CandidateExperienceFactory
    // {
    //     // return CandidateExperienceFactory::new();
    // }
}
