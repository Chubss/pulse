const gulp        = require('gulp');
const browserSync = require('browser-sync');


gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "src"
        }
    });
});