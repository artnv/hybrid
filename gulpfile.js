var 
    gulp            = require('gulp'),
    concat          = require('gulp-concat'),
    concatCss       = require('gulp-concat-css'),
    replace         = require('gulp-replace'),
    cleanCSS        = require('gulp-clean-css'),
    imagemin        = require('gulp-imagemin'),
    fileinclude     = require('gulp-file-include'),
    htmlmin         = require('gulp-htmlmin'),
    rename          = require('gulp-rename'),
    uglify          = require('gulp-uglify');
// --

// Соблюдаем последовательность подключения!
var scripts = [

    // ------------------------ Библиотеки ------------------------
    './node_modules/underscore/underscore-min.js',
    './node_modules/backbone/backbone-min.js',
    './node_modules/jquery/dist/jquery.min.js',
    './src/js/pace-config.js',
    './node_modules/pace-js/pace.min.js',
    './node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
 
    // ------------------------  Файлы приложения ------------------------
    
    // App
    './src/js/app/AppHybrid.js',
    
    // Configs
    './src/js/app/configs/**/*.js',
    
    // Router
    './src/js/app/router.js',

    // Components
    './src/js/app/components/**/*.js',
    
    // Widgets
    './src/js/app/widgets/**/*.js',
    
    // Views
    './src/js/app/views/**/*.js',
    
    // Models
    './src/js/app/models/**/*.js',
    
    // Controllers
    './src/js/app/controllers/**/*.js',
    
    // Module Managers
    './src/js/app/moduleManagers/**/*.js',
    
    // Запуск приложения
    './src/js/app/run.js'
    
];

var css = [
    './node_modules/bootstrap/dist/css/bootstrap.css',
    './node_modules/pace-js/themes/red/pace-theme-minimal.css',
    './src/css/**/*.css'
];

var fonts = [
    './node_modules/bootstrap/dist/fonts/**/*'
];

var html = [
    './src/templates/main.html'
];

var imgs = [
    './imgs/**/*'
];

gulp.task('js', function() {
    return gulp.src(scripts)
    .pipe(uglify())
    .pipe(concat('./bundle.js'))
    .pipe(gulp.dest('./web/js/'));
});

gulp.task('css', function () {
    return gulp.src(css)
    //.pipe(replace('../fonts/', 'assets/fonts/'))
    .pipe(concatCss("./bundle.css"))
    .pipe(cleanCSS({ level: 2 }))
    .pipe(gulp.dest('./web/css/'));
});

gulp.task('fonts', function () {
    return gulp
    .src(fonts)
    .pipe(gulp.dest('./web/fonts'));
});

gulp.task('html', function () {
    return gulp.src(html)
    .pipe(fileinclude({
        prefix: '@@',
        basepath: '@file'
    }))
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(rename('index.html'))
    .pipe(gulp.dest('./web/'));
});
/*
gulp.task('images', function () {
    return gulp
    .src(imgs)
    .pipe(imagemin())
    .pipe(gulp.dest('../web/images'));
});
*/
gulp.task('default', [
    'js',
    'css',
    'fonts',
    'html'
]);