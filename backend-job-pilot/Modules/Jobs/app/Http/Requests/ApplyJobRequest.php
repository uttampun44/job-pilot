<?php

namespace Modules\Jobs\app\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ApplyJobRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     */
    public function rules(): array
    {
        return [
              'resume' => 'required|file|mimes:jpg,png,pdf,doc,docx,xls,xlsx,ppt,pptx,txt,csv',
             'cover_letter' => 'required|string',
             'job_id' => 'required|exists:jobs,id',
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
