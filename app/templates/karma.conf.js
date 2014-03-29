'use strict';

module.exports = function (config) {
  config.set({
    autowatch: false,
    basePath: __dirname,
    browsers: ['PhantomJS'],
    files: [
      'app/assets/bower_components/jquery/dist/jquery.js',
      'app/assets/bower_components/jasmine-jquery/lib/jasmine-jquery.js',
      'spec/javascripts/helpers/*Helper.js',
      'spec/javascripts/**/*Spec.js',
      // {pattern: 'spec/javascripts/fixtures/**/*.html', included: false}
    ],
    frameworks: ['jasmine'],
    singleRun: true
  });
};
