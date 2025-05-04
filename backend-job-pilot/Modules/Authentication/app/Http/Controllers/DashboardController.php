<?php

namespace Modules\Authentication\app\Http\Controllers;

use Illuminate\Routing\Controller;
use Modules\Authentication\app\Repositories\DashboardRepository;

protected $dashboardRepository;

public function __construct(DashboardRepository $dashboardRepository)
{
    $this->dashboardRepository = $dashboardRepository;
}
class DashboardController extends Controller {}
