/**
 * Created by idbord on 3/13/16.
 */
var gulp = require('gulp'),
    compass = require('gulp-compass'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    clean = require('gulp-clean'),
    tinylr = require('tiny-lr'),
    livereload = require('gulp-livereload'),
    server = tinylr(),
    port = 35729;

gulp.task('css', function(){
   var css_src = 'css/src/*.scss',
       css_dist = 'css/dist';
    gulp.src(css_src)
        .pipe(compass({
            config_file: 'css/config.rb',
            sass: 'css/src',
            css: css_dist
        }))
        .pipe(gulp.dest(css_dist))
        .pipe(rename({suffix: '.min'}))
        .pipe(minifycss())
        .pipe(livereload(server))
        .pipe(gulp.dest(css_dist));
});

gulp.task('clean', function() {
    gulp.src(['css/dist'], {read: false})
        .pipe(clean());
});

gulp.task('default', ['clean'], function(){
    gulp.start('css');
});

gulp.task('watch',function(){
    server.listen(port, function(err){
        if (err) {
            return console.log(err);
        }
        gulp.watch('css/src/*.scss', function(){
            gulp.run('css');
        });
    });
});