<?php

namespace Modules\Settings\app\Repositories;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use Modules\Settings\app\Models\EmployerInformation;

class EmployerInformationRepositories
{
    public function fetchEmployers()
    {
        return EmployerInformation::with("user")->select('id', 'company_name', 'company_address', 'company_phone_number', 'company_email', 'company_website_url', 'linkedin_url', 'industry', 'company_size', 'founded_year', 'logo')->get()->toArray();
    }

    public function createUpdate(array $data)
    {

        if (isset($data['logo'])) {
           
            // generate uuid and add extension to filename
            $uuid = Str::uuid()->toString();
            $extension = $data['logo']->getClientOriginalExtension();
            $filename = $uuid . '.' . $extension;

            $path = Storage::putFileAs('company/logos', $data['logo'], $filename, 'public');
            $data['logo'] = $path;
        }

        EmployerInformation::updateOrCreate(
            ['user_id' => Auth::user()->id],
            $data
        );
    }
}
