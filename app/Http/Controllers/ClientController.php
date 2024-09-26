<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Client;
use Illuminate\Http\Request;
use App\Http\Resources\ClientResource;
use App\Http\Requests\StoreClientRequest;
use App\Http\Requests\UpdateClientRequest;

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
        $users = User::orderBy('created_at', 'desc')->get();

        return inertia('Client/Create', [
            'users' => $users
        ]);
    }

    public function store(StoreClientRequest $request) {
        $clientData = $request->validated();

        // Extract user_ids from the validated data
        $userIds = $clientData['user_ids'] ?? [];
        unset($clientData['user_ids']);

        // Create the client
        $client = Client::create($clientData);

        // Attach users to the client
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
        $data = $request->validated();

        $client->update($data);

        return to_route('dashboard')->with('success', "Client \"$client->name\" was updated.");
    }

    public function destroy(Client $client) {
        $name = $client->name;

        $client->delete();

        return to_route('dashboard')->with('success', "Client \"$name\" was deleted.");
    }
}
