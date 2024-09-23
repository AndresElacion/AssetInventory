<?php

namespace App\Http\Controllers;

use App\Models\Client;
use Illuminate\Http\Request;
use App\Http\Requests\StoreClientRequest;
use App\Http\Resources\ClientResource;

class ClientController extends Controller
{
    public function Index() {
        $clients = Client::orderBy('created_at', 'desc')->paginate(10);

        return inertia('Client/Index', [
            'clients' => ClientResource::collection($clients),
            'success' => session('success'),
        ]);
    }

    public function create() {
        return inertia('Client/Create');
    }

    public function store(StoreClientRequest $request) {
        $client = $request->validated();
        
        Client::create($client);

        return to_route('dashboard')->with('success', 'New client was created.');
    }
}
