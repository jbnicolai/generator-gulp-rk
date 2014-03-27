'use strict';

var chalk = require('chalk'),
    path = require('path'),
    yeoman = require('yeoman-generator');

var GulpRkGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = require('../package.json');

    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.installDependencies();
        this.spawnCommand('bundle', ['install']);
      }
    });
  },

  askFor: function () {
    var done = this.async();

    console.log(chalk.magenta('Hello. Out of the box I include ' + chalk.green('jQuery') + ' and ' + chalk.green('Modernizr') + '.'));

    var prompts = [{
      name: 'features',
      message: 'What else would you like to include?',
      type: 'checkbox',
      choices: [{
        name: 'Bourbon',
        value: 'includeBourbon',
        checked: false
      }, {
        name: 'Normalize.css',
        value: 'includeNormalize',
        checked: true
      }]
    }, {
      name: 'appName',
      message: 'What is the ' + chalk.green('name') + ' of your web app?',
      default: path.basename(process.cwd())
    }];

    this.prompt(prompts, function (props) {
      var features = props.features;

      function hasFeature(feat) { return features.indexOf(feat) !== -1; }

      this.appName = props.appName;
      this.includeNormalize = hasFeature('includeNormalize');
      this.includeBourbon = hasFeature('includeBourbon');

      done();
    }.bind(this));
  },

  app: function () {
    this.mkdir('app');
    this.mkdir('app/assets/images');

    this.copy('_bower.json', 'bower.json');
    this.copy('_package.json', 'package.json');
    this.copy('Gemfile', 'Gemfile');
    this.copy('assets/javascripts/app.js', 'app/assets/javascripts/app.js');
    this.copy('assets/stylesheets/app.scss', 'app/assets/stylesheets/app.scss');
    this.copy('bowerrc', '.bowerrc');
    this.copy('gitignore', '.gitignore');

    this.template('gulpfile.js');
    this.template('index.html', 'app/index.html');
  },

  projectfiles: function () {
    this.copy('jshintrc', '.jshintrc');
  }
});

module.exports = GulpRkGenerator;
