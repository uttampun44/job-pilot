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
        Schema::create('candidate_informations', function (Blueprint $table) {
            $table->id();
            $table->longText('image')->nullable();
            $table->string('date_of_birth');
            $table->string('nationality');
            $table->string('gender');
            $table->string('marital_status');
            $table->string('religion')->nullable();
            $table->string('education');
            $table->string('phone_number');
            $table->string('address');
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void {
        Schema::dropIfExists('candidate_informations');
    }
};
