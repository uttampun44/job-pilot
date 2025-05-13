<?php

namespace Modules\Settings\app\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Modules\Settings\app\Repositories\PermissionRepositories;
use Modules\Settings\app\Http\Requests\PermissionRequest;

class PermissionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    protected $permissionRepository;

    public function __construct(PermissionRepositories $permissionRepository)
    {
        $this->permissionRepository = $permissionRepository;
    }
    public function index()
    {
        
        $roles = $this->permissionRepository->fetchRoles();
        return response()->json([
            'roles' => $roles,
        ], 200);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('settings::create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(PermissionRequest $request) 
    {
        try {
            $data = $request->validated();
            $permissionsData = $data['permissions'];
            $this->permissionRepository->createUpdatePermission($permissionsData);
            return response()->json(['message' => 'Permission given successfully'], 200);
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
        $permissions = $this->permissionRepository->fetchPermissions($id);
        return response()->json([
            'permissions' => $permissions,
        ], 200);
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
