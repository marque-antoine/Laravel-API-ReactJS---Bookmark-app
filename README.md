﻿# Laravel API + React JS

## Prerequisite

1.  [PHP](https://www.php.net/) using here version 7.2.5
2.  [Composer](https://getcomposer.org/download/)
3.  [MySQL](https://www.mysql.com/)
4.  [Laravel](https://laravel.com/) using here version 7.0
5.  [Postman](https://www.postman.com/)

## Installation

-   Clone the repository using `git clone https://github.com/marque-antoine/Laravel-API-ReactJS---Bookmark-app && cd Laravel-API-ReactJS---Bookmark-app`
-   Fill out a .env file in the project root using the .env.example file as a template
-   create a new database for your application by running : `mysql -uroot -p`
-   Run the following to create a new database named **project :** `` CREATE DATABASE `project` ``;
-   Quit mysql using `quit;`
-   Install composer dependencies using `composer install && composer update`
-   Run `php artisan key:generate` `php artisan migrate` `php artisan db:seed` and `php artisan passport:install`
-   Install NPM dependencies using `npm install`
-   Run php server with `php artisan serve`
-   Run `npm run watch` if you want to edit the app with hot reloading

Et voilà !

## Installation of laravel/passport

[Laravel and Passport with API](https://laravel.com/docs/7.x/passport#consuming-your-api-with-javascript)

## Installation of laravel/react

[Laravel & React](https://laravel.com/docs/7.x/frontend#using-react)

## This app use [Grommet](https://v2.grommet.io/)

a react-based framework that provides accessibility, modularity, responsiveness, and theming in a tidy package

## Test with Postman

All requests are available at [https://www.getpostman.com/collections/dfd44367727c310cc2a8](https://www.getpostman.com/collections/dfd44367727c310cc2a8)

Unfortunately, presets are not shared so **to send request as authenticated, add this on your header :**

`'Accept'=>'application/json'; 'Authorization' => 'Bearer' + $accessToken,`

(\$accessToken is available with **register** and **login**)

# TO DO

-   [ ] Add admin to the app
-   [ ] Manage error 404 through the api
-   [ ] Change the register and login view to use the api
