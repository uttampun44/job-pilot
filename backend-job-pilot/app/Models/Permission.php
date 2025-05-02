<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Modeles\PermissionTitle;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Permission extends Model
{
    protected $table = 'permissions';
    protected $fillable = ['name'];

    public function permissionsTitles(): HasOne
    {
        return $this->hasOne(PermissionTitle::class);
    }
}
