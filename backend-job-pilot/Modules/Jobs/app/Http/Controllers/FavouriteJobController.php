<?php

namespace Modules\Jobs\app\Http\Controllers;

use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Log;
use Modules\Jobs\app\Http\Requests\FavouriteJobsRequest;
use Modules\Jobs\app\Repositories\FavouriteJobsRepositories;

class FavouriteJobController extends Controller {

    protected $favouriteJobsRepositories;

    public function __construct(FavouriteJobsRepositories $favouriteJobsRepositories)
    {
        $this->favouriteJobsRepositories = $favouriteJobsRepositories;
    }
   
    public function fetchFavouriteJobs()
    {
        $data = $this->favouriteJobsRepositories->fetchFavouriteJobs();
        return response()->json($data, 200);
    }
    public function favouriteJobsStore(FavouriteJobsRequest $request)
    {
      try {
         $data = $request->validated();
        $this->favouriteJobsRepositories->favouriteJobsStore($data);
        return response()->json(['message' => 'Job favourited successfully'], 201);
      } catch (\Exception $e) {
        Log::info("Error in favouriteJobsStore: " . $e->getMessage());
        Log::error("Error in favouriteJobsStore: " . $e->getMessage());
        return response()->json(['message' => $e->getMessage()], 400);
      }
    }

    public function findFavouriteJobs(int $id)
    {
        $data = $this->favouriteJobsRepositories->findFavouriteJobs($id);
        return response()->json($data, 200);    
    }

    public function destroyFavouriteJobs(int $id)
    {
        $this->favouriteJobsRepositories->destroyFavouriteJobs($id);
        return response()->json(['message' => 'Job deleted successfully'], 200);
    }
}
