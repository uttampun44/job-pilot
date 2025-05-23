<?php

namespace Modules\Jobs\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
// use Modules\Jobs\Database\Factories\ApplyJobFactory;

class ApplyJob extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     */
    protected $table = 'apply_jobs';
    protected $fillable = ['resume', 'description', 'job_id', 'user_id'];

    // protected static function newFactory(): ApplyJobFactory
    // {
    //     // return ApplyJobFactory::new();
    // }

    public function user()/**
     * Get the user that owns the ApplyJob
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
