<?php

namespace Modules\Jobs\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class FavouriteJobsRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     */
    public function rules(): array
    {
        return [
            'job_id' => 'required|integer',
            'user_id' => 'required|integer',
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
