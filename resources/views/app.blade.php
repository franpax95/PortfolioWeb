<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        
        <!-- CSRF Token -->
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <!-- Favicon -->
        <link rel="shortcut icon" href="{{ asset('favicon.ico') }}">
        <!-- Styles -->
        
        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,700;1,300;1,700&display=swap" rel="stylesheet">

        <!-- SEO -->
        {!! SEO::generate() !!}
    </head>
    <body>
        <div id="app"></div>

        <script src="{{ mix('/js/app.js') }}"></script>
    </body>
</html>