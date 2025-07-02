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
        Schema::create('courses', function (Blueprint $table) {
            $table->id();
              $table->string('title');
            $table->longText('short_description');
            $table->longText('course_details');
            $table->longText('career_outcomes');
            $table->longText('image')->nullable();
            $table->string('course_type')->default('free');
            $table->decimal('price', 10, 2)->default(0.00);
            $table->foreignId('course_category_id')->constrained('course_categories')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('courses');
    }
};
