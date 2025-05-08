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

    public function fetchDashboard()
    {
        return $this->dashboardRepository->fetchDashboard();
    }
}
