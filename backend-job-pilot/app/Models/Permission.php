<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\PermissionTitle;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Spatie\Permission\Models\Permission as SpatiePermission;
class Permission extends SpatiePermission
{
    protected $table = 'permissions';
    protected $fillable = ['name'];

    public function permissionsTitles(): HasMany
    {
        return $this->hasMany(PermissionTitle::class);
    }
}
