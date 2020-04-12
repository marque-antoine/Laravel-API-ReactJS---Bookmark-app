<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Bookmarks routes
Route::get('bookmarks','ApiController@getAllBookmarks');
Route::get('bookmarks/{id}', 'ApiController@getBookmark');


Route::middleware('auth:api')->post('bookmarks','ApiController@createBookmark');
Route::middleware('auth:api')->put('bookmarks/{id}', 'ApiController@updateBookmark');
Route::middleware('auth:api')->delete('bookmarks/{id}', 'ApiController@deleteBookmark');

//Passport Routes
Route::post('register', 'ApiUserController@register');
Route::post('login', 'ApiUserController@login');

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
