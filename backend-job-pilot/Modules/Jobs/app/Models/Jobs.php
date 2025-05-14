<?php

namespace Modules\Jobs\app\Models;

use App\Models\Role;
use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Modules\Jobs\Database\Factories\JobsFactory;
use Modules\Settings\app\Models\EmployerInformation;

class Jobs extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     */
    protected $table = 'jobs';
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
}
