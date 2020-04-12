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
        $bookmark->save();
        //Add auth check
        if(auth()->user()->bookmarks()->save($bookmark)){
            return response()->json(['message'=>'bookmark created'],201);
        }else{
            return response()->json(['message'=>'Unauthorized'],500);
        }
    }

    public function getBookmark($id){
        //Logic to get a bookmark infos
        if(Bookmark::where('id',$id)->exists()){
            $bookmark=Bookmark::where('id',$id)->get()->toJson(JSON_PRETTY_PRINT);
            return response($bookmark,200);
        }else{
            return response()->json(['message'=>'Bookmark not found'],404);
        }
    }

    public function updateBookmark(Request $request,$id){
        //Logic to update a bookmark infos
        if(Bookmark::where('id',$id)->exists()){
            //Add auth check, can only update your bookmarks
            if(auth()->user()->bookmarks()->find($id)){
                $bookmark=Bookmark::find($id);
                $bookmark->folder=is_null($request->folder) ? $bookmark->folder : $request->folder;
                $bookmark->tags =is_null($request->tags) ? $bookmark->tags : $request->tags;
                $bookmark->title=is_null($request->title) ? $bookmark->title : $request->title;
                $bookmark->shared=is_null($request->shared) ? $bookmark->shared : $request->shared;
                $bookmark->url=is_null($request->url) ? $bookmark->url : $request->url;
                $bookmark->flames=is_null($request->flames) ? $bookmark->flames : $request->flames;
                $bookmark->save();
                return response()->json(['message'=>'bookmark updated'],200);
            }else{
                return response()->json(['message'=>'Unauthorized'],404);
            }
            

        }else{
            return response()->json(['message'=>'Bookmark not found'],404);
        }
    }

    public function deleteBookmark($id){
        //Logic to delete a bookmark, can only delete your bookmarks
        if(Bookmark::where('id',$id)->exists()){
            //Add auth check
            if(auth()->user()->bookmarks()->find($id)){
                $bookmark=Bookmark::find($id);
                $bookmark->delete();
                return response()->json(['message'=>'bookmark deleted'],202);
            }else{
                 return response()->json(['message'=>'Bookmark not found'],404);           
            }
            
        }else{
            return response()->json(['message'=>'Bookmark not found'],404);
        }
    }

    
}
