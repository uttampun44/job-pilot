<?php

namespace Modules\Settings\app\Repositories;

use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\DB;
use Modules\Settings\app\Models\CandidateInformation;
use Modules\Settings\app\Models\CandidateExperience;

class CandidateRepositories
{
    public function fetchCandidates()
    {
        return CandidateInformation::with("user")->select('id', 'date_of_birth', 'nationality', 'gender', 'marital_status', 'religion', 'education', 'work_experience', 'phone_number', 'address')->get()->toArray();
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