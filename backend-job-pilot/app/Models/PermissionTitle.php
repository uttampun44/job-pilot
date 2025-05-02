<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use App\Models\Permission;
use Illuminate\Database\Eloquent\Relations\HasMany;

class PermissionTitle extends Model
{
   protected $table = 'permission_titles';
   protected $fillable = ['title', 'permission_id'];

   public function permissions(): BelongsTo
   {
       return $this->belongsTo(Permission::class, 'permission_id');
   }
}
