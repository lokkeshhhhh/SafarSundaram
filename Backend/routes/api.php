<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\Product;

Route::get('/user', function (Request $request) {
    $users  = Product::get();

    return response()->json([
        'message' => 'success',
        'users' => $users
    ],200);
});
