<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBookmarksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('bookmarks', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigIncrements('user_id');
            $table->string('title');
            $table->string('url');
            $table->string('shared')->nullable();
            $table->string('folder')->nullable();
            $table->string('tags')->nullable();
            $table->integer('flames')->nullable();
            $table->timestamps();
            //Delete all the bookmarks of a deleted user
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('bookmarks');
    }
}
