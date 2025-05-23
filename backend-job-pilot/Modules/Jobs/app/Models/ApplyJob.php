<?php

namespace Modules\Jobs\app\Models;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

// use Modules\Jobs\Database\Factories\ApplyJobFactory;

class ApplyJob extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     */
    protected $table = 'apply_jobs';
    protected $fillable = ['resume', 'cover_letter', 'job_id', 'user_id'];

    // protected static function newFactory(): ApplyJobFactory
    // {
    //     // return ApplyJobFactory::new();
    // }


    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
    
}
