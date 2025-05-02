<?php

namespace Modules\Settings\app\Repositories;

use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\DB;
use Modules\Settings\Models\CandidateProfile;
use Modules\Settings\Models\CandidateExperience;

class CandidateRepositories
{
    public function fetchCandidates()
    {
        return CandidateProfile::with("user")->select('id', 'date_of_birth', 'nationality', 'gender', 'marital_status', 'religion', 'education', 'work_experience', 'phone_number', 'address')->get()->toArray();
    }

    public function createUpdate(array $data)
    {
        DB::beginTransaction();
        $auth_user = Auth::user();

        if(!$auth_user) {
            return throw new \Exception('Not logged in');
        }

        if(isset($data['image'])) {
            $data['image'] = Storage::put('public/images/'.$data['image'], file_get_contents($data['image']));
        }

        CandidateProfile::createOrUpdate($data);
        CandidateExperience::createOrUpdate($data);
        
        DB::commit();
        
        return true;
    }
}