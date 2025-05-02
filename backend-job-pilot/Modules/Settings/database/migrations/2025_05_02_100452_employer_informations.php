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
        Schemma::create('employer_informations', function (Blueprint $table) {
            $table->id();
            $table->string('company_name');
            $table->string('company_address');
            $table->string('company_phone_number');
            $table->string('company_email');
            $table->string('company_website_url')->nullable();
            $table->string('linkedin_url')->nullable();
            $table->string('industry');
            $table->string('company_size');
            $table->integer('founded_year')->nullable();
            $table->longText('logo')->nullable();
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void {
        Schemma::dropIfExists('employer_informations');
    }
};
