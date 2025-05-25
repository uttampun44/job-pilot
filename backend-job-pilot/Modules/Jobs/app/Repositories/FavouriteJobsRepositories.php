<?php

namespace Modules\Jobs\app\Repositories;
use \Modules\Jobs\app\Models\FavouriteJobs;

class FavouriteJobsRepositories
{
    public function favouriteJobsStore(array $data)
    {
        return FavouriteJobs::create($data);
    }

    public function fetchFavouriteJobs()
    {
        return FavouriteJobs::with('user')->paginate(10);
    }
}