<?php

namespace Modules\Jobs\app\Models;

use App\Models\Role;
use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Modules\Jobs\Database\Factories\JobsFactory;
use Modules\Settings\app\Models\EmployerInformation;

class Jobs extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     */
    protected $table = 'job_datas';
    protected $fillable = [];

    protected static function newFactory(): JobsFactory
    {
        return JobsFactory::new();
    }

    public function role()
    {
        return $this->belongsTo(Role::class);
    }

   

    public function user():BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function favouriteJobs():HasMany
    {
        return $this->hasMany(FavouriteJobs::class);
    }
    public function employerInformation():BelongsTo
    {
        return $this->belongsTo(EmployerInformation::class, 'job_id');
    }
    public function applyJobs():HasMany
    {
        return $this->hasMany(ApplyJob::class);
    }
}
