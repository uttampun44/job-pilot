<?php

namespace Modules\Settings\app\Models;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Modules\Settings\Database\Factories\CandidateInformationFactory;

// use Modules\Settings\Database\Factories\CandidateProfileFactory;

class CandidateInformation extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     */
    protected $table = 'candidate_informations';
    protected $fillable = [];

    // protected static function newFactory(): CandidateProfileFactory
    // {
    //     // return CandidateProfileFactory::new();
    // }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
    protected static function newFactory():CandidateInformationFactory
    {
        return CandidateInformationFactory::new();
    }
}
