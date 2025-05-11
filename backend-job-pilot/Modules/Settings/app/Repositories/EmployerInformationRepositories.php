<?php

namespace Modules\Settings\app\Repositories;

use App\Enum\IndustrySector;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use Modules\Settings\app\Models\EmployerInformation;

class EmployerInformationRepositories
{
    public function fetchEmployer()
    {
        //  eager loading
       return EmployerInformation::with("user")->select("id", "company_name", "company_address", "company_phone_number", "company_email", "company_website_url", "linkedin_url", "industry", "company_size", "founded_year", "logo", "user_id")->get();
    }

    public function fetchEmployerIndustries()
    {
       return collect(IndustrySector::cases())->map(fn($industry) => [
        'label' => $industry->name,
        'value' => $industry->value
    ]);
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
