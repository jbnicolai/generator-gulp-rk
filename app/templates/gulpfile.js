'use strict';

var gulp = require('gulp'),
    open = require('open'),
    plugins = require('gulp-load-plugins')();

plugins.connect = require('gulp-connect');
plugins.useref = require('gulp-useref');

gulp.task('build', ['html', 'images']);

gulp.task('clean', function () {
  gulp.src(['dist'], { read: false }).pipe(plugins.clean());
});

gulp.task('connect', plugins.connect.server());

gulp.task('default', ['clean'], function () {
  gulp.start('build');
});

gulp.task('resize', function () {
  return gulp.src('app/assets/images/**@2x.png')
    .pipe(plugins.imageResize({
      imageMagick: true,
      width: '50%'
    }))
    .pipe(plugins.rename(function (path) { path.basename = path.basename.replace('@2x', ''); }))
    .pipe(gulp.dest('app/assets/images'));
});

gulp.task('html', ['stylesheets', 'javascripts'], function () {
  var cssFilter = plugins.filter('**/*.css'),
      jsFilter = plugins.filter('**/*.js'),
      htmlFilter = plugins.filter('**/*.html');

  gulp.src('app/*.html')
    .pipe(plugins.useref.assets())
    .pipe(jsFilter)
    .pipe(plugins.uglify({
      preserveComments: 'some'
    }))
    .pipe(jsFilter.restore())
    .pipe(cssFilter)
    .pipe(plugins.csso())
    .pipe(cssFilter.restore())
    .pipe(plugins.useref.restore())
    .pipe(plugins.useref())
    .pipe(htmlFilter)
    .pipe(plugins.htmlmin({
      collapseBooleanAttributes: true,
      collapseWhitespace: true,
      removeAttributeQuotes: true,
      removeEmptyAttributes: true,
      removeRedundantAttributes: true
    }))
    .pipe(htmlFilter.restore())
    .pipe(gulp.dest('dist'))
    .pipe(plugins.size());
});

gulp.task('images', ['resize'], function () {
  gulp.src('app/assets/images/**/*')
    .pipe(plugins.imagemin())
    .pipe(gulp.dest('dist/assets/images'))
    .pipe(plugins.size());
});

gulp.task('javascripts', function () {
  gulp.src('app/assets/javascripts/**/*.js')
    .pipe(plugins.jshint('.jshintrc'))
    .pipe(plugins.jshint.reporter('default'))
    .pipe(plugins.size());
});

gulp.task('serve', ['connect', 'stylesheets', 'resize'], function () {
  open('http://localhost:3000');
});

gulp.task('stylesheets', function () {
  gulp.src('app/assets/stylesheets/app.scss')
    .pipe(plugins.rubySass({
      loadPath: ['app/assets/bower_components'],
      style: 'expanded'
    }))
    .pipe(plugins.autoprefixer('last 1 version'))
    .pipe(gulp.dest('app/assets/stylesheets'))
    .pipe(plugins.size());
});

gulp.task('watch', ['connect', 'serve'], function () {
  gulp.watch([
    'app/*.html',
    'app/assets/images/**/*',
    'app/assets/javascripts/**/*.js',
    'app/assets/stylesheets/**/*.css',
    'app/assets/stylesheets/**/*.scss'
  ], function (event) {
    gulp.src(event.path)
      .pipe(plugins.connect.reload());
  });

  gulp.watch('app/assets/images/**/*', ['images']);
  gulp.watch('app/assets/javascripts/**/*.js', ['javascripts']);
  gulp.watch('app/assets/stylesheets/**/*.scss', ['stylesheets']);
});
