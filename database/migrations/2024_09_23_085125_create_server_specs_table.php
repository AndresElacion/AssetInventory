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
        Schema::create('server_specs', function (Blueprint $table) {
            $table->id();
            $table->foreignId('client_id')->constrained('id')->on('clients')->onDelete('cascade');
            $table->string('url');
            $table->string('cpu');
            $table->string('ram');
            $table->string('private_ip');
            $table->string('public_ip');
            $table->string('os');
            $table->string('storage');
            $table->string('category');
            $table->string('hosted_on');
            $table->string('sso');
            $table->string('mfa');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('server_specs');
    }
};
