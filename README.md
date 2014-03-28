#generator-gulp-rk [![Build Status](https://secure.travis-ci.org/richardkall/generator-gulp-rk.png?branch=master)](https://travis-ci.org/richardkall/generator-gulp-rk)

[Yeoman](http://yeoman.io) generator using [gulp.js](http://gulpjs.com). Work in progress.

##Features
- Bootstrap/Bourbon/Normalize.css _(optional)_
- Bower for dependency management
- CSS autoprefixing
- HTML, CSS & JS minification
- Image optimization & [resizing](#generate-regular-images-from-2x-images)
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

Run server:

```
$ gulp watch
```

Build project:

```
$ gulp
```

##Notes

###Generate regular images from @2x images

The `resize` task will search for images named `*@2x.*` inside `app/assets/images/` and create copies at half the size. It runs automatically within the watch/build task.

Make sure [ImageMagick](http://www.imagemagick.org/) is installed on your system and set up in your $PATH.

##Ideas/to do
- Asset revisioning
- Custom Modernizr builds
- Ember.js/Handlebars
- Image sprites
- Jasmine task
- Jekyll
- More generator tests
- A better name...

##License

Copyright (c) 2014 [Richard Käll](http://richardkall.se). Licensed under the MIT license.
