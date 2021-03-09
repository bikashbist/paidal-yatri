const mix = require('laravel-mix');

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

mix.sass('scss/test.scss', 'css')
.js('dev_js/app.js','js');


mix.scripts([
    'js/slick.min.js',
    'js/app.js',
], 'js/all.js');