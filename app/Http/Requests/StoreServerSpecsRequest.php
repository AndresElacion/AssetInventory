<?php

namespace App\Http\Requests;

use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class StoreServerSpecsRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'client_id' => ['nullable', 'exists:clients,id'],
            'url' => ['required', 'max:255'],
            'cpu' => ['required', 'max:255'],
            'ram' => ['required', 'max:255'],
            'private_ip' => ['required', 'max:255'],
            'public_ip' => ['required', 'max:255'],
            'os' => ['required', 'max:255'],
            'storage' => ['required', 'max:255'],
            'category' => ['required', Rule::in(['physical', 'vm', 'docker', 'virtual_host'])],
            'hosted_on' => ['required', 'max:255'],
            'sso' => ['required', Rule::in(['saml', 'id'])],
            'mfa' => ['required', Rule::in(['email', 'sms'])]
        ];
    }
}
