<?php

namespace Modules\Jobs\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
// use Modules\Jobs\Database\Factories\FavouriteJobsFactory;

class FavouriteJobs extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     */
    protected $table = 'favourite_jobs';
    protected $fillable = ['is_favourite', 'job_id', 'user_id'];

    // protected static function newFactory(): FavouriteJobsFactory
    // {
    //     // return FavouriteJobsFactory::new();
    // }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
