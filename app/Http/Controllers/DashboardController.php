<?php

namespace App\Http\Controllers;

use App\Models\Client;
use App\Models\serverSpecs;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Resources\ClientResource;

class DashboardController extends Controller
{
    public function index() 
    {
        $clients = Client::with('serverSpecs')->orderBy('created_at', 'desc')->paginate(10); // Eager load server specs
        // Use a fallback in case the user is not authenticated
        $role = Auth::user() ? Auth::user()->role : null;

        return inertia('Dashboard', [
            'clients' => ClientResource::collection($clients),
            'success' => session('success'),
            'role' => $role, // Make sure this value is being passed
        ]);
    }

}
