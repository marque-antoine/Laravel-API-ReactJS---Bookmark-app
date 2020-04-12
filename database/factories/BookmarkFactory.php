<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Bookmark;
use Faker\Generator as Faker;

$factory->define(Bookmark::class, function (Faker $faker) {
    return [
        'title'=>$faker->sentence($nbWords =6, $variableNbWords=true),
        'url'=>$faker->url,
        'shared'=>$faker->email,
        'folder'=>['Web','Mobile','Data','Other'][mt_rand(0,count(['Web','Mobile','Data','Other'])-1)],
        'tags'=>['new','hot','inProgress','mustRead'][mt_rand(0,count(['new','hot','inProgress','mustRead'])-1)],
        'flames'=> rand(0,5)
    ];
});
