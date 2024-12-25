<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

        <!-- Styles / Scripts -->
        @if (file_exists(public_path('build/manifest.json')) || file_exists(public_path('hot')))
            @vite(['resources/css/app.css', 'resources/js/app.js'])
        @else
        <style>
            button{
                background-color: red;
            }
        </style>
        @endif
    </head>
    <body>
        <div style="height:300px;width:300px;">
            <button class="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded m-10">
                lokesh
            </button>
        </div>
    </body>
</html>
