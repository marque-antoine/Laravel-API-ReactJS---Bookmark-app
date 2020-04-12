<?php

namespace App\Http\Controllers;

use App\Bookmark;

use Illuminate\Http\Request;

class ApiController extends Controller
{
    public function getAllBookmarks(){
        //Eloquent logic to get all the bookmarks by last update
        $bookmarks=Bookmark::orderBy('updated_at','DESC')->get()->toJson(JSON_PRETTY_PRINT);
        return response($bookmarks,200);
    }
}
