<?php

namespace Modules\Authentication\app\Http\Controllers;

use Illuminate\Routing\Controller;
use Modules\Authentication\app\Repositories\DashboardRepository;

class DashboardController extends Controller {
    
    protected $dashboardRepository;

    public function __construct(DashboardRepository $dashboardRepository)
    {
        $this->dashboardRepository = $dashboardRepository;
    }

    public function fetchPermission()
    {   
        return $this->dashboardRepository->fetchPermissions();
    }

    public function fetchTotalUsersWithRoles()
    {
        $data = $this->dashboardRepository->fetchTotalUsersWithRoles();
        return response()->json($data, 200);
    }

    public function fetchDashboardFavouriteJobs()
    {
        $data = $this->dashboardRepository->fetchDashboardFavouriteJobs();
        return response()->json($data, 200);
    }

    public function fetchDashboardAppliedJobs()
    {
        $data = $this->dashboardRepository->fetchDashboardAppliedJobs();
        return response()->json($data, 200);
    }
}
