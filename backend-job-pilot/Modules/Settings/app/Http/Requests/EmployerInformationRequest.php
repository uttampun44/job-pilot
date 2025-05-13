<?php

namespace Modules\Settings\app\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class EmployerInformationRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     */
    public function rules(): array
    {
        return [
             'company_name' => 'required|string|max:255',
            'company_address' => 'required|string|max:255',
            'company_phone_number' => 'required|string|max:20',
            'company_email' => 'required|email|max:255',
            'company_website_url' => 'nullable|url|max:255',
            'linkedin_url' => 'nullable|url|max:255',
            'industry' => 'required|string|max:100',
            'company_size' => 'required|string|max:50',
            'founded_year' => 'nullable|integer|min:1800|max:' . date('Y'),
            // 'logo' => 'nullable|file|mimes:jpg,jpeg,png,svg|max:2048',
            'user_id' => 'required|exists:users,id',
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
