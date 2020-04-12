# Laravel API + React JS

## Prerequisite

1.  Make sure you have [composer](https://getcomposer.org/download/) installed.
2.  Make sure you have latest stable version of [node](https://nodejs.org/en/download/) installed.

## Installation

-   Clone the repository using `git clone https://github.com/marque-antoine/Laravel-API-ReactJS---Bookmark-app && cd Laravel-API-ReactJS---Bookmark-app`
-   Fill out a .env file in the project root using the .env.example file as a template
-   create a new database for your application by running : `mysql -uroot -p`
-   Run the following to create a new database named **project :** `` CREATE DATABASE `project` ``;

-   Install composer dependencies using `composer install && composer update`
-   Run `php artisan key:generate` `php artisan migrate` `php artisan db:seed` and `php artisan passport:install`

## Installation of laravel/passport

[https://laravel.com/docs/7.x/passport#consuming-your-api-with-javascript](https://laravel.com/docs/7.x/passport#consuming-your-api-with-javascript)

## Test with Postman

All requests are available at [https://www.getpostman.com/collections/dfd44367727c310cc2a8](https://www.getpostman.com/collections/dfd44367727c310cc2a8)

Unfortunately, presets are not shared so **to send request as authenticated, add this on your header :**

`'Accept'=>'application/json'; 'Authorization' => 'Bearer' + $accessToken,`

(\$accessToken is available with **register** and **login**)
