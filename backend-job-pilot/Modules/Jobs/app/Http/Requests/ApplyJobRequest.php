<?php

namespace Modules\Jobs\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ApplyJobRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     */
    public function rules(): array
    {
        return [
            'job_id' => 'required|exists:jobs,id',
             'user_id' => 'required|exists:users,id',
             'role_id' => 'required|exists:roles,id',
             'description' => 'required|string',
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
