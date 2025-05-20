<?php

namespace Modules\Settings\app\Models;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Modules\Jobs\app\Models\Jobs;
use Modules\Settings\Database\Factories\EmployerInformationFactory;

class EmployerInformation extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     */
    protected $table = 'employer_informations';
    protected $fillable = ['company_name', 'company_address', 'company_phone_number', 'company_email', 'company_website_url', 'linkedin_url', 'industry', 'company_size', 'founded_year', 'logo', 'user_id'];

    protected static function newFactory(): EmployerInformationFactory
    {
        return EmployerInformationFactory::new();
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function employerJobs():HasMany
    {
        return $this->hasMany(Jobs::class);
    } 
}
