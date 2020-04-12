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

    public function createBookmark(Request $request){
        //Logic to create a bookmark
        $bookmark = new Bookmark;
        $bookmark->title = $request->title;
        $bookmark->folder=$request->folder;
        $bookmark->shared = $request->shared;
        $bookmark->tags = $request->tags;
        $bookmark->url=$request->url;
        $bookmark->flames=$request->flames;
        //Add auth check
        return response()->json(['message'=>'bookmark created'],201);
    }
}