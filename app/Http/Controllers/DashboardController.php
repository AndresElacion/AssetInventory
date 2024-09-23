<?php

namespace App\Http\Controllers;

use App\Models\Client;
use Illuminate\Http\Request;
use App\Http\Resources\ClientResource;

class DashboardController extends Controller
{
    public function index() 
    {
        $clients = Client::orderBy('created_at', 'desc')->paginate(10);

        return inertia('Dashboard', [
            'clients' => ClientResource::collection($clients),
            'success' => session('success'),
        ]);
    }
}
