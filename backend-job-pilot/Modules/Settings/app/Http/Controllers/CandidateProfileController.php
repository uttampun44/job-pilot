<?php

namespace Modules\Settings\app\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Modules\Settings\app\Repositories\CandidateInformationRepositories;
use Illuminate\Support\Facades\Log;

class CandidateProfileController extends Controller
{
    /**
     * Display a listing of the resource.
     */

    protected $candidateRepository;

    public function __construct(CandidateInformationRepositories $candidateInformationRepository)
    {
        $this->candidateRepository = $candidateInformationRepository;
    }
    public function index()
    {
        $data = $this->candidateRepository->getCandidateEnums();
        return response()->json($data, 200);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('settings::index');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            $data = $request->validated();
            $this->candidateRepository->createUpdate($data);
            return response()->json(['message' => 'Candidate profile updated successfully'], 201);
        } catch (\Throwable $th) {
            Log::error($th->getMessage());
            return response()->json(['message' => $th->getMessage()], 400);
        }
    }

    /**
     * Show the specified resource.
     */
    public function show($id)
    {
        return view('settings::show');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        return view('settings::edit');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id) {}

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id) {}
}
