'use strict';

/**
 * Tasks for amazcota-web-prelunch
 *
 * Copyright (c) Sergio Morlán Páramo (@serchserch), Kernel
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */


var gulp = require('gulp'),
  babel = require('gulp-babel'),
  rename = require('gulp-rename'),
  browserSync = require('browser-sync'),
  browserify = require('gulp-browserify'),
  less = require('gulp-less'),
  nodemon = require('gulp-nodemon'),
  reload = browserSync.reload;


// Compile es6/es2015 to es5
//
gulp.task('babel_server', function() {
  return gulp.src(['src/**/*.js', '!src/public/js/vendor/**', '!src/public/js/**/*.js'])
    .pipe(babel({
      stage: 0
    }))
    .pipe(gulp.dest('build'));
});


// Compile es6/es2015 to es5
//
gulp.task('babel_client', function(done) {
  gulp.src(['src/public/js/**/*.js', '!src/public/js/vendor/**'])
    .pipe(babel({
      stage: 0
    }))
    .pipe(gulp.dest('build/public/js'))
    .on('end', function() {
      gulp.src(['build/public/js/main.js'])
        .pipe(browserify({
          debug: true
        }))
        .on('error', function(err) {
          console.error('error', err);
          this.emit('end');
        })
        .pipe(rename('bundle.js'))
        .pipe(gulp.dest('build/public/js'));
      done();
    });
});

gulp.task('browserify', function(cb) {
  gulp.src(['build/public/js/main.js'])
    .pipe(browserify({
      debug: true
    }))
    .on('error', function(err) {
      console.error('error', err);
      this.emit('end');
    })
    .pipe(rename('bundle.js'))
    .pipe(gulp.dest('build/public/js'));
  return cb();
});


// Copy views
//
gulp.task('copy', function() {
  return gulp.src('src/views/**/*.*')
    .pipe(gulp.dest('build/views'));
});


// Copy vendor scripts env:development
//
gulp.task('copy_vendor', function() {
  return gulp.src('src/public/js/vendor/**')
    .pipe(gulp.dest('build/public/js/vendor'));
});


// Less tasks
//
gulp.task('less', function() {
  return gulp.src('src/public/less/main.less')
    .pipe(less())
    .on('error', function(err) {
      console.error('error', err);
      this.emit('end');
    })
    .pipe(gulp.dest('build/public/css'));
});



// Serve task for development with brwoserSync
//
gulp.task('serve', ['copy', 'copy_vendor', 'less', 'babel_client', 'browserify',
  'babel_server', 'nodemon'
], function() {
  return browserSync({
    files: ['build/**/*.*'],
    proxy: 'http://192.168.1.67:3000',
    port: 5000,
    notify: true
  });
});


// Demon
//
gulp.task('nodemon', function(cb) {
  var called = false;
  return nodemon({
      script: 'build/server.js',
      // ext: 'js'
      ignore: ['gulpfile.js'],
      watch: ['build/**/*.*', '!build/public/**/*.*']
    })
    .on('error', function() {
      console.log('error nodemon');
    })
    .on('start', function() {
      if (!called) {
        called = true;
        cb();
      }
    })
    .on('restart', function() {
      setTimeout(function() {
        reload({
          stream: false
        });
      }, 500);
    });
});



// Build app
//
gulp.task('build', ['babel']);

gulp.watch(['src/**/*.js', '!src/public/js/**/*.js'], ['babel_server']);
gulp.watch('src/public/js/**/*.js', ['babel_client']);
gulp.watch('src/views/**/*.html', ['copy']);
gulp.watch('src/public/less/**/*.less', ['less']);

// Default  for development
//
gulp.task('default', ['serve'], function() {});
