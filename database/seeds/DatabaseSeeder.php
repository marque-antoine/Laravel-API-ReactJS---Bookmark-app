<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    //Seeds db with fake data
    {
        factory(App\User::class,10)->create()->each(function($user){
            $user->bookmarks()->saveMany(factory(App\Bookmark::class, rand(5,10))->make());
        });
    }
}
