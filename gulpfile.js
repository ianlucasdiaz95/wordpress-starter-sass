// Gulp loader

const {
    src,
    dest,
    task,
    watch,
    series,
    parallel
} = require('gulp');

// --------------------------------------------
// Dependencies
// --------------------------------------------

// CSS / SASS plugins
let sass = require('gulp-sass');
let autoprefixer = require('gulp-autoprefixer');
let minifycss = require('gulp-clean-css');

// JSS / plugins
const terser = require('gulp-terser');

// Utility plugins
let concat = require('gulp-concat');
let del = require('del');
let plumber = require('gulp-plumber');
let sourcemaps = require('gulp-sourcemaps');
let rename = require('gulp-rename');

// Browser plugins
let browserSync = require('browser-sync').create();

// Images plugins
let images = require('gulp-imagemin');


// Project Variables

let styleSrc = 'assets/css/scss/**/*.scss';


/**AUTOPREFIXER */
const AUTOPREFIXER_BROWSERS = [
    'ie >= 10',
    'ie_mob >= 10',
    'ff >= 30',
    'chrome >= 34',
    'safari >= 7',
    'opera >= 23',
    'ios >= 7',
    'android >= 4.4',
    'bb >= 10'
];

// --------------------------------------------
// Stand Alone Tasks
// --------------------------------------------


// Compiles SASS files
function css(done) {
    src('assets/css/scss/**/*.scss')
        .pipe(plumber())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(autoprefixer({ browsers: AUTOPREFIXER_BROWSERS }))
        .pipe(rename({
            basename: 'style',
            suffix: '.min'
        }))

        .pipe(dest('./assets/css'));
    done();
};


// Watch for changes

function watcher() {

    browserSync.init({
        /*server: {
            baseDir: "./"
        },*/
        host: 'localhost/bauldemoda/',
        proxy: "localhost/bauldemoda/",
        port: 80,
        notify: false
    });

    watch(styleSrc, series(css));
    watch(['assets/css/*.css', './**/*.php', 'assets/js/**/*.js']).on('change', browserSync.reload);

};


let build = parallel(watcher);
task('default', build);
task('scss', parallel(css));
