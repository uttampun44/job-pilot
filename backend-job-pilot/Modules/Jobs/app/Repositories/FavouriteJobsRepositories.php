<?php

namespace Modules\Jobs\app\Repositories;

use Illuminate\Support\Facades\Auth;
use \Modules\Jobs\app\Models\FavouriteJobs;

class FavouriteJobsRepositories
{
    public function favouriteJobsStore(array $data)
    {    
        $checkFavourite = FavouriteJobs::where('user_id', $data['user_id'])
                             ->where('job_id', $data['job_id'])
                             ->first();

        if($checkFavourite)
        {
            $checkFavourite->delete();
        }else{
            $checkFavourite = FavouriteJobs::create($data);
            return $checkFavourite;
        }                     
       
    }

    public function fetchFavouriteJobs()
    {  
        $authUser = Auth::user();
        return FavouriteJobs::with(['job', 'user.employerInformation'])->where('user_id', $authUser->id)->paginate(10);
    }

    public function findFavouriteJobs(int $id)
    {    
        $authUser = Auth::user();
        return FavouriteJobs::with(['job', 'user.employerInformation'])->where('user_id', $id)->where('job_id', $id)->first();
    }

    public function destroyFavouriteJobs(int $id)
    {
        return FavouriteJobs::destroy($id);
    }
}