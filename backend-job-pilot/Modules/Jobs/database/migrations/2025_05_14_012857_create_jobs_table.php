<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('jobs', function (Blueprint $table) {
            $table->id();
            $table->longText('job_description');
            $table->longText('requirements');
            $table->longText('desirable');
            $table->longText('benefits')->nullable();
            $table->string('job_type');
            $table->json('job_benefits_tags')->nullable();
            $table->string('job_posted');
            $table->string('job_expires');
            $table->string('job_location');
            $table->string('job_level');
            $table->decimal('salary_start', 10, 2)->nullable();
            $table->decimal('salary_end', 10, 2)->nullable();
            $table->string('negotioable')->nullable();
            $table->json('job_tags')->nullable();
            $table->foreignId('role_id')->constrained()->onDelete('cascade');
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('jobs');
    }
};
