<?php

namespace Modules\Jobs\app\Models;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

// use Modules\Jobs\Database\Factories\FavouriteJobsFactory;

class FavouriteJobs extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     */
    protected $table = 'favourite_jobs';
    protected $fillable = ['job_id', 'user_id'];

    // protected static function newFactory(): FavouriteJobsFactory
    // {
    //     // return FavouriteJobsFactory::new();
    // }

    public function user():BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function job():BelongsTo
    {
        return $this->belongsTo(Jobs::class);
    }
}
