var gulp = require('gulp');
var bs = require('browser-sync').create(); // create a browser sync instance.

gulp.task('browser-sync', function() {
    bs.init({
        server: {
            baseDir: "./"
        },
        files: ["./css/*css", "./index.html", "./js/*.js"]
    });
});


// Watch Files For Changes
gulp.task('watch', ['browser-sync'], function() {
    // Configure html file reloads for Browsersync
    gulp.watch(["*.html", ".js"]).on('change', bs.reload);
});