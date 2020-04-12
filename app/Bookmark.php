<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Bookmark extends Model
{
    protected $table = 'bookmarks';

    protected $fillable = ['title', 'folder', 'tags','flames','url','shared'];

    public function user(){
        return $this->belongsTo(User::class);
    }
}
