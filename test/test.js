/*global describe, beforeEach, it */
'use strict';

var path = require('path'),
    helpers = require('yeoman-generator').test;

describe('gulp-rk generator', function () {
  beforeEach(function (done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
      if (err) {
        return done(err);
      }

      this.app = helpers.createGenerator('gulp-rk:app', [
        '../../app'
      ]);

      done();
    }.bind(this));
  });

  it('can be imported without blowing up', function () {
    this.app = require('../app');
  });

  it('creates expected files', function (done) {
    var expected = [
      '.bowerrc',
      '.gitignore',
      '.jshintrc',
      'Gemfile',
      'app',
      'app/assets/images',
      'app/assets/javascripts/app.js',
      'app/assets/stylesheets/app.scss',
      'app/index.html',
      'bower.json',
      'gulpfile.js',
      'karma.conf.js',
      'package.json',
      'spec/javascripts/exampleSpec.js',
      'spec/javascripts/helpers/specHelper.js'
    ];

    helpers.mockPrompt(this.app, {
      'features': ['includeNormalize']
    });

    this.app.options['skip-install'] = true;

    this.app.run({}, function () {
      helpers.assertFile(expected);
      done();
    });
  });
});
