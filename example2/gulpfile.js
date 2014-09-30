var gulp        = require('gulp'),
    browserify  = require('browserify'),
    watchify    = require('watchify'),
    source      = require('vinyl-source-stream'),
    streamify   = require('gulp-streamify'),
    connect     = require('gulp-connect');

// bundle up our js
gulp.task('browserify', function(cb) {
    return browserify('./src/js/app.js').bundle()
        .on('error', function(err){
            console.log(err.toString());
            this.emit('end');
        })
        .pipe(source('app.bundle.js'))
        .pipe(gulp.dest('./dist/js'))
        .pipe(connect.reload());
});


// css tasks
gulp.task('css', function () {
    return gulp.src('./src/css/**/*.css')
        .pipe(gulp.dest('./dist/css/'))
        .pipe(connect.reload());
});

// markup task
gulp.task('markup', function(){
    gulp.src('./src/*.html')
    .pipe(gulp.dest('./dist/'))
    .pipe(connect.reload());
});

// connect server
gulp.task('webserver', function(){
    return connect.server({
        root: './dist',
        livereload : true
    });
});

// Use watchify for browserify bundles
gulp.task('watchify', function() {
    var bundler = watchify(browserify('./src/js/app.js'), watchify.args);
        bundler.on('update', function(id){
            console.log('file' + id[0] + ' was updated, building bundle...');
            return rebundle();
        });

        bundler.on('log', function (msg) {
            console.log(msg);
        })

    function rebundle(){
        return bundler.bundle()
             .on('error', function(err){
                console.log(err.toString());
                this.emit('end');
            })
            .pipe(source('app.bundle.js'))
            .pipe(gulp.dest('./dist/js/'))
            .pipe(connect.reload());
    }
    return rebundle();
});

// watch for changes
gulp.task('watcher', ['browserify', 'css', 'markup', 'watchify'], function(){
    var markupWatcher = gulp.watch(['./src/*.html'], ['markup']);
        markupWatcher.on('change', function(event){
            console.log('file' + event.path + ' was ' + event.type + ', building markup...');
        });

    var lessWatcher = gulp.watch(['./src/**/*.css'], ['css']);
        lessWatcher.on('change', function(event){
            console.log('file' + event.path + ' was ' + event.type + ', building css...');
        });
});

// Default task kick everything off
gulp.task('default', ['watcher', 'webserver']);