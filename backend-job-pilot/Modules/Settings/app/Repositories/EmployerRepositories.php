<?php

namespace Modules\Settings\app\Repositories;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Modules\Settings\Models\Employer;

class EmployerRepositories
{
    public function fetchEmployers()
    {
        return Employer::with("user")->select('id', 'company_name', 'company_address', 'company_phone_number', 'company_email', 'company_website_url', 'linkedin_url', 'industry', 'company_size', 'founded_year', 'logo')->get()->toArray();
    }

    public function createUpdate(array $data)
    {
        
        if(isset($data['company_logo'])) {
            $data['logo'] = Storage::put('public/logos/'.$data['company_logo'], file_get_contents($data['company_logo']));
        }

        Employer::createOrUpdate($data);

    }
}