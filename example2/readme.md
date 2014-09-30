Example 2
===

This example is a bit more indepth than the first example but not by much. If you notice there are now three javascript files. The main difference with this example is you no longer need to build manually its all done for you with gulp. I kept the gulpfile as simple as possible there is no minification done or anything because the purpose is just to show how to use browserify.

We have to use a plugin called vinyl-source-stream (mapped to the variable `source`) which basically "streamifies" the bundle into what gulp expects.

```javascript
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
```