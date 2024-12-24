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

Route::post('/login', function (Request $request) {
    $cradentials  = $request->only('email', 'password');

    if (Auth::attempt($cradentials)) {
        return response()->json([
            'message' => 'Login Successfull!',
        ],200);
    }

    return response()->json([
        'message' => 'Login Failed! Invelid Cradentials',
    ],500);
});