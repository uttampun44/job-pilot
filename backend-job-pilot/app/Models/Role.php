<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\HasMany;
use Modules\Jobs\app\Models\Jobs;
use Spatie\Permission\Models\Role as SpatieRole;

class Role extends SpatieRole
{
    protected $table = 'roles';
    protected $fillable = [
        'name',
        'guard_name',
    ];

    public function jobs():HasMany
    {
        return $this->hasMany(Jobs::class);
    }
   
}
