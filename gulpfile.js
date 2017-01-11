var gulp = require('gulp'),
    watch = require('gulp-watch'),
    postcss = require('gulp-postcss'),
    nested = require('postcss-nested'),
    autoprefixer = require('autoprefixer'),
    cssvars = require('postcss-simple-vars'),
    cssImport = require('postcss-import');

gulp.task('default', function () {
    console.log("Hooray - I have just created a Gulp task!!!")
});

gulp.task('html', function () {

    console.log("This is something useful done to my HTML here")

});


gulp.task('styles', function () {
    return gulp.src('./app/assets/styles/styles.css')
        .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
        .pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch', function () {

    watch('./app/index.html', function () {
        gulp.start('html')
    });

    watch('./app/assets/styles/**/*.css', function () {
        gulp.start('styles')
    });

});