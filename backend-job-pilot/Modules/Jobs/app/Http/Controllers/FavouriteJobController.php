<?php

namespace Modules\Jobs\Http\Controllers;

use Illuminate\Routing\Controller;
use Modules\Jobs\app\Repositories\FavouriteJobsRepositories;

class FavouriteJobController extends Controller {

    protected $favouriteJobsRepositories;

    public function __construct(FavouriteRepositories $favouriteJobsRepositories)
    {
        $this->favouriteJobsRepositories = $favouriteJobsRepositories;
    }
   
    public function fetchFavouriteJobs()
    {
        $data = $this->favouriteJobsRepositories->fetchFavouriteJobs();
        return response()->json($data, 200);
    }
    public function favouriteJobsStore(FavouriteJobRequest $request)
    {
      try {
        
        $this->favouriteJobsRepositories->favouriteJobsStore($request->validated());
        return response()->json(['message' => 'Job favourited successfully'], 200);
      } catch (\Exception $e) {
        return response()->json(['message' => $e->getMessage()], 400);
      }
    }
}
