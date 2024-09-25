<?php

namespace App\Http\Controllers;

use App\Models\Client;
use App\Models\ServerSpecs;
use Illuminate\Http\Request;
use App\Http\Resources\ClientResource;
use App\Http\Resources\ServerSpecsResource;
use App\Http\Requests\StoreServerSpecsRequest;
use App\Http\Requests\UpdateServerSpecsRequest;

class ServerSpecsController extends Controller
{
    // List clients with their server specs
    public function index() {
        $clients = Client::with('serverSpecs')->orderBy('created_at', 'desc')->paginate(10);

        return inertia('Dashboard', [
            'clients' => ClientResource::collection($clients),
            'success' => session('success'),
        ]);
    }

    // Render server spec creation form for a client
    public function create(Client $client) {
        return inertia('ServerSpecs/Create', [
            'client' => new ClientResource($client),
        ]);
    }

    // Store server specs
    public function store(StoreServerSpecsRequest $request) {
        $data = $request->validated();

        ServerSpecs::create($data);

        return to_route('dashboard')->with('success', 'Server Specification was created.');
    }

    // Render edit form for server specs
    public function edit($id) {
        
        $serverSpecs = ServerSpecs::findOrFail($id);

        return inertia('ServerSpecs/Edit', [
            'serverSpecs' => new ServerSpecsResource($serverSpecs)
        ]);
    }

    public function update(UpdateServerSpecsRequest $request, $id) {
        $serverSpecs = ServerSpecs::findOrFail($id);
        $data = $request->validated();

        $serverSpecs->update($data);

        return to_route('dashboard')->with('success', "Server specification was updated.");
    }

    public function destroy($id) {
        $destroyServerSpecs = ServerSpecs::findOrFail($id);

        $destroyServerSpecs->delete();

        return to_route('dashboard')->with('success', 'Server Specification was delete.');
    }
}
