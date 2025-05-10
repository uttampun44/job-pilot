<?php

namespace Modules\Authentication\app\Repositories;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Modules\Settings\app\Models\CandidateInformation;
use Modules\Settings\app\Models\Employer;

class DashboardRepository
{
    public function fetchDashboard()
    {
        $user = Auth::user();

        // calling fetch allcandidates and fetch allemployers
        
        
        if($user->hasRole('Employer'))
        {
           
           return response()->json([
                'candidates' => $this->fetchAllCandidates(),
                'userRolePermissions' => $user->getPermissionsViaRoles(),
            ], 200);
        }
        
        if($user->hasRole('Candidate'))
        {
           
           return response()->json([
                'employers' => $this->fetchAllEmployers(),
                'userRolePermissions' => $user->getPermissionsViaRoles(),
            ], 200);
        }
        
    }

    public function fetchAllCandidates()
    {
        $candidates = CandidateInformation::with('user')->select('id', 'image', 'date_of_birth')->get()->toArray();
        return $candidates;
    }

    public function fetchAllEmployers()
    {
        $employers = Employer::with('user')->select('id', 'company_name', 'company_address', 'company_phone_number', 'company_email', 'company_website_url', 'linkedin_url', 'industry', 'company_size', 'founded_year', 'logo')->get()->toArray();
        return $employers;
    }
}