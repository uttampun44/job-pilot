<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void {
        Schema::create('candidate_work_experiences', function (Blueprint $table) {
            $table->id();
            $table->string('work_experience')->nullable();;
            $table->json('skills');
            $table->string("position")->nullable();
            $table->longText('resume')->nullable();
            $table->text('about_me')->nullable()
            $table->foreignId('candidate_id')->constrained('candidate_informations')->onDelete('cascade');
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void {}
};
