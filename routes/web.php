<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get( '/{path?}', function(){
    // SEO::setTitle('Página SEO');
    // SEO::setDescription('Ejemplo de descripción de la página');
    // SEO::opengraph()->setUrl('http://nigmacode.com');
    // SEO::setCanonical('https://nigmacode.com');
    // SEO::opengraph()->addProperty('type', 'articles');
    // SEO::twitter()->setSite('@franpax95');

    return view( 'app' );
} )->where('path', '.*');