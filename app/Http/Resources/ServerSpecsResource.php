<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ServerSpecsResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'client_id' => $this->client_id,
            'client' => new ClientResource($this->client_id),
            'url' => $this->url,
            'cpu' => $this->cpu,
            'ram' => $this->ram,
            'private_ip' => $this->private_ip,
            'public_ip' => $this->public_ip,
            'os' => $this->os,
            'storage' => $this->storage
        ];
    }
}
