<?php

namespace App\Http\Controllers;

use App\Models\Client;
use App\Models\serverSpecs;
use Illuminate\Http\Request;
use App\Http\Resources\ClientResource;

class DashboardController extends Controller
{
    public function index() 
    {
        $clients = Client::with('serverSpecs')->orderBy('created_at', 'desc')->paginate(10); // Eager load server specs

        return inertia('Dashboard', [
            'clients' => ClientResource::collection($clients),
            'success' => session('success'),
        ]);
    }

}
