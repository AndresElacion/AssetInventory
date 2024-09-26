<?php

namespace App\Http\Requests;

use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class UpdateClientRequest extends FormRequest
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
            "name" => ['nullable', "max:255"],
            "email" => ["nullable", "string", "email", "unique:clients,email"],
            "user_ids" => ['nullable', 'array'], // Nullable if it's optional
            "user_ids.*" => ['required', Rule::exists('users', 'id')]
        ];
    }
}
