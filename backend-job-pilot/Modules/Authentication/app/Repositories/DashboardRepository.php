<?php

namespace Modules\Authentication\app\Repositories;

use App\Models\User;
use Illuminate\Support\Facades\Auth;

class DashboardRepository
{
    public function fetchDashboard()
    {
        $user = Auth::user();
        
        // calling fetch allcandidates and fetch allemployers
        $candidates = $this->fetchAllCandidates();
        $employers = $this->fetchAllEmployers();

        return [
            'candidates' => $candidates,
            'employers' => $employers,
            'userRolePermissions' => $user->getPermissionsViaRoles(),
        ];

    }

    public function fetchAllCandidates()
    {
        $candidates = Candidate::with('user')->select('id', 'name', 'email', 'phone_number', 'profile_picture_url', 'is_active')->get()->toArray();
        return $candidates;
    }

    public function fetchAllEmployers()
    {
        $employers = Employer::with('user')->select('id', 'company_name', 'company_address', 'company_phone_number', 'company_email', 'company_website_url', 'linkedin_url', 'industry', 'company_size', 'founded_year', 'logo')->get()->toArray();
        return $employers;
    }
}