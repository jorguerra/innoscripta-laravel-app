const mix = require('laravel-mix');

mix.webpackConfig({
   resolve: {
      modules: ["node_modules", "resources/js/react_app/node_modules"]
   }
})

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.react('resources/js/app.js', 'public/js')
   .combine(['resources/template/css/*.css'], 'public/css/theme.css')
   .combine(['resources/template/js/*.js'], 'public/js/theme.js')
   .sass('resources/sass/app.scss', 'public/css')
   ;
