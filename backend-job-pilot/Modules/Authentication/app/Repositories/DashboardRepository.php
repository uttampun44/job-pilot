<?php

namespace Modules\Authentication\app\Repositories;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Modules\Settings\app\Models\CandidateInformation;
use Modules\Settings\app\Models\EmployerInformation;
use Illuminate\Support\Facades\DB;
use Modules\Jobs\app\Models\ApplyJob;
use Modules\Jobs\app\Models\FavouriteJobs;

class DashboardRepository
{
    public function fetchPermissions()
    {

        $user = Auth::user();

        if (!$user) {
            return response()->json([
                'message' => 'You are not logged in!',
            ], 401);
        }

        $permissions = $user->getPermissionsViaRoles();
        $candidates = null;
        $employers = null;

        if ($user->hasRole(['Super Admin', 'Admin', 'Employer'])) {
            $candidates = $this->fetchAllCandidates();
        }

        if ($user->hasRole(['Super Admin', 'Admin', 'Candidate'])) {
            $employers = $this->fetchAllEmployers();
        }

        return response()->json([
            'candidates' => $candidates,
            'employers' => $employers,
            'userRolePermissions' => $permissions,
        ], 200);
    }

    public function fetchAllCandidates()
    {
        $candidates = CandidateInformation::with('user')->select('id', 'image', 'date_of_birth')->limit(100)->get()->toArray();
        return $candidates;
    }

    public function fetchAllEmployers()
    {
        $employers = EmployerInformation::with('user')->select('id', 'company_name', 'company_address', 'company_phone_number', 'company_email', 'company_website_url', 'linkedin_url', 'industry', 'company_size', 'founded_year', 'logo')->limit(100)->get()->toArray();
        return $employers;
    }

    public function fetchDashboardData()
    {
        $totalUsersWithRoles = DB::table('model_has_roles')
                              ->join('roles', 'model_has_roles.role_id', '=', 'roles.id')
                             ->select('roles.name', DB::raw('count(*) as total'))
                          ->groupBy('roles.name')
                          ->get();

        $favouriteJobs  = $this->fetchDashboardFavouriteJobs();
        $appliedJobs = $this->fetchDashboardAppliedJobs();

        return [
            'totalUsersWithRoles' => $totalUsersWithRoles,
            'favouriteJobs' => $favouriteJobs,
            'appliedJobs' => $appliedJobs,
        ];
    }

    public function fetchDashboardFavouriteJobs()
    {
         $authUser = Auth::user();
        return FavouriteJobs::with(['job', 'user.employerInformation'])
                ->where('user_id', $authUser->id)
                ->latest('id')
                ->take(10)
                ->get();
    }

    public function fetchDashboardAppliedJobs()
    {
         $authUser = Auth::user();
        return ApplyJob::with(['job', 'user.employerInformation'])->
                   where('user_id', $authUser->id)
                   ->latest('id')
                   ->take(10)
                   ->get();
    }
}
