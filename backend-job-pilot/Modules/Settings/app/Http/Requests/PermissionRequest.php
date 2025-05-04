<?php

namespace Modules\Settings\app\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PermissionRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     */
    public function rules(): array
    {
        return [
            'permissions' => 'required|array',
            'permissions.*.id' => 'required|integer|distinct',
            'permissions.*.name' => 'required|string|distinct',
        ];
    }

    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }
}
