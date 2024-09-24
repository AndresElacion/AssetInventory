<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ServerSpecsResource extends JsonResource
{
    /** This is to populate the data to frontend */
    public static $wrap = false;
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'url' => $this->url,
            'cpu' => $this->cpu,
            'ram' => $this->ram,
            'private_ip' => $this->private_ip,
            'public_ip' => $this->public_ip,
            'os' => $this->os,
            'storage' => $this->storage,
            'client_id' => $this->client_id,
        ];
    }
}
