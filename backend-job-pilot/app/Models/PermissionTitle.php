<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PermissionTitle extends Model
{
   protected $table = 'permission_titles';
   protected $fillable = ['title', 'permission_id'];
}
