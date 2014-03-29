#generator-gulp-rk [![Build Status](https://secure.travis-ci.org/richardkall/generator-gulp-rk.png?branch=master)](https://travis-ci.org/richardkall/generator-gulp-rk)

[Yeoman](http://yeoman.io) generator using [gulp.js](http://gulpjs.com). Work in progress.

##Features
- Bootstrap/Bourbon/Normalize.css _(optional)_
- Bower for dependency management
- CSS autoprefixing
- HTML, CSS & JS minification
- Image optimization & resizing ([see notes](#resize-task))
- Jasmine + Karma
- JS linting
- LiveReload
- Modernizr
- SASS compilation
- jQuery

##Get started

Install Yeoman:

```bash
$ npm install -g yo
```

Install this generator:

```bash
$ npm install -g generator-gulp-rk
```

Create a new project:

```bash
$ mkdir my-project
$ cd my-project
$ yo gulp-rk
```

##Gulp tasks

Run development server:

```
$ gulp watch
```

Run tests with Karma:

```
$ gulp test
```

Clean up old files, run tests and build project:

```
$ gulp
```

##Notes

###resize task

Search for images named `*@2x.*` inside `app/assets/images/` and create copies at half the size. Make sure [ImageMagick](http://www.imagemagick.org/) is installed on your system and set up in your $PATH.

*Runs automatically within the watch and build tasks.*

##Ideas/to do
- Asset revisioning
- Custom Modernizr builds
- Ember.js/Handlebars
- Image sprites
- Jekyll
- More generator tests
- A better name...

##License

Copyright (c) 2014 [Richard Käll](http://richardkall.se). Licensed under the MIT license.
