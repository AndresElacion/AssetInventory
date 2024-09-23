<?php

namespace App\Http\Controllers;

use App\Models\Client;
use App\Models\serverSpecs;
use Illuminate\Http\Request;
use App\Http\Resources\ClientResource;
use App\Http\Requests\StoreServerSpecsRequest;
use App\Http\Resources\ServerSpecsResource;

class ServerSpecsController extends Controller
{
    public function index() {
        $clients = Client::with('serverSpecs')->orderBy('created_at', 'desc')->paginate(10); // Eager load server specs

        return inertia('Dashboard', [
            'clients' => ClientResource::collection($clients),
            'success' => session('success'),
        ]);
    }

    public function create(Client $client)
{
    return inertia('ServerSpecs/Create', [
        'client' => new ClientResource($client),
    ]);
}

    public function store(StoreServerSpecsRequest $request) {
        $data = $request->validated();

        serverSpecs::create($data);

        return to_route('dashboard')->with('success', 'Server Specification was created.');
    }
}
