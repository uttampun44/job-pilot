<?php

namespace Modules\Settings\app\Repositories;

use App\Enum\Education;
use App\Enum\Employment;
use App\Enum\Gender;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\DB;
use Modules\Settings\app\Models\CandidateInformation;
use Modules\Settings\app\Models\CandidateExperience;
use Illuminate\Support\Str;

class CandidateInformationRepositories
{
    public function fetchCandidates()
    {
        return CandidateInformation::with("user")->select('id', 'date_of_birth', 'nationality', 'gender', 'marital_status', 'religion', 'education', 'work_experience', 'phone_number', 'address')->get()->toArray();
    }

    public function getCandidateEnums()
    {
        $gender = collect(Gender::cases())->map(fn($gender) =>[
            'label' => $gender->name,
            'value' => $gender->value
        ] );

        $education = collect(Education::cases())->map(fn($education) =>[
            'label' => $education->name,
            'value' => $education->value
        ] );

        $employment = collect(Employment::cases())->map(fn($employment) =>[
            'label' => $employment->name,
            'value' => $employment->value
        ] );

        return [
            'gender' => $gender,
            'education' => $education,
            'employment' => $employment
        ];
    }

    public function createUpdate(array $data)
    {
        DB::beginTransaction();
        $auth_user = Auth::user();

        if(!$auth_user->hasRole(['Candidate', 'Super Admin', 'Admin']))
        {
            return throw new \Exception('You are not authorized to perform this action !');
        }

       if (isset($data['image'])) {
           
            // generate uuid and add extension to filename
            $uuid = Str::uuid()->toString();
            $extension = $data['image']->getClientOriginalExtension();
            $filename = $uuid . '.' . $extension;

            $path = Storage::putFileAs('candidate/image', $data['image'], $filename, 'public');
            $data['image'] = $path;
        }

        CandidateInformation::updateOrCreate($data);
        CandidateExperience::updateOrCreate($data);
        
        DB::commit();        
        return true;
    }
}