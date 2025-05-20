<?php

namespace Modules\Jobs\app\Transformers;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class JobResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'job_description' => $this->job_description,
            'requirements' => $this->requirements,
            'desirable' => $this->desirable,
            'benefits' => $this->benefits,
            'job_type' => $this->job_type,
            'job_benefits_tags' => json_decode($this->job_benefits_tags, true),
            'job_posted' => $this->job_posted,
            'job_expires' => $this->job_expires,
            'job_location' => $this->job_location,
            'job_level' => $this->job_level,
            'salary_start' => $this->salary_start,
            'salary_end' => $this->salary_end,
            'negotioable' => $this->negotioable,
            'job_tags' => json_decode($this->job_tags, true),
            'employer_information' => $this->whenLoaded('user', function () {
                return $this->user->employerInformation ?? null;
            }),
        ];
    }
}
