<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Resources\ClientResource;
use App\Http\Requests\StoreClientRequest;
use App\Http\Requests\UpdateClientRequest;

class ClientController extends Controller
{
    public function index() {
        $clients = Client::orderBy('created_at', 'desc')->paginate(10);

        // Use a fallback in case the user is not authenticated
        $role = Auth::user() ? Auth::user()->role : null;

        return inertia('Client/Index', [
            'clients' => ClientResource::collection($clients),
            'success' => session('success'),
            'role' => $role, // Make sure this value is being passed
        ]);
    }

    public function create() {
        $users = User::orderBy('created_at', 'desc')->get();

        return inertia('Client/Create', [
            'users' => $users
        ]);
    }

    public function store(StoreClientRequest $request) {
        $clientData = $request->validated();

        $userIds = $clientData['user_ids'] ?? [];
        unset($clientData['user_ids']);

        $client = Client::create($clientData);

        if (!empty($userIds)) {
            $client->users()->attach($userIds);
        }

        return to_route('dashboard')->with('success', 'New client was created.');
    }

    public function edit(Client $client) {
        $users = User::all();

        return inertia('Client/Edit', [
            'client' => new ClientResource($client),
            'users' => $users,
        ]);
    }

    public function update(UpdateClientRequest $request, Client $client) {
        $clientData = $request->validated();

        $userIds = $clientData['user_ids'] ?? [];
        unset($clientData['user_ids']);

        $client->update($clientData);

        $client->users()->sync($userIds);

        return to_route('dashboard')->with('success', "Client \"$client->name\" was updated.");
    }

    public function destroy(Client $client) {
        $name = $client->name;

        $client->delete();

        return to_route('dashboard')->with('success', "Client \"$name\" was deleted.");
    }
}
