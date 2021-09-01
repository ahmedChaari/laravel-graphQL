<?php

use App\Post;
use App\Topic;
use Illuminate\Database\Seeder;
use App\User;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        factory(User::class, 20)->create();
        Topic::create(['name'=>'Featured Sites','slug'=>'featured']);
        Topic::create(['name'=>'Good web Sites','slug'=>'good_web_site']);
        Topic::create(['name'=>'New twiter','slug'=>'new_twiter']);
        factory(Post::class, 20)->create();
        
      
    }
}
