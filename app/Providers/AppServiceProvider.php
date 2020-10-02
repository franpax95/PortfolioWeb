<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        /** DESCOMENTAR PARA EL HOSTING DE IONOS */
        // $this->app->bind('path.public', function() {
        //     return base_path().'/public_html';
        // });
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        /** DESCOMENTAR PARA EL HOSTING DE IONOS */
        // $this->app->bind('path.public', function() {
        //     return base_path().'/../public_html';
        // });
    }
}
