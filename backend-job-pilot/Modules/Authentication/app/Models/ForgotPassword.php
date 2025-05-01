<?php

namespace Modules\Authentication\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
// use Modules\Authentication\Database\Factories\ForgotPasswordFactory;

class ForgotPassword extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     */
    protected $table = 'forgot_passwords';
    protected $fillable = [];

    // protected static function newFactory(): ForgotPasswordFactory
    // {
    //     // return ForgotPasswordFactory::new();
    // }
}
