# gulp-load-dir

> Loads in gulp task scripts in a designated directory.


## Install

```sh
$ npm install --save-dev gulp-load-dir
```


## Usage

When writing a gulpfile, instead of putting all gulp task logic in one file, you can just write a single line like this:

```js
var gulp = require('gulp');
require('gulp-load-dir')(gulp);
```
Then you can seperate your tasks into files and put them in 'gulp/tasks' directory(default path for task scripts);

You can also pass in options, and designate the tasks directory if you will
```js
var gulp = require('gulp');
require('gulp-load-dir')(gulp, {
  taskDir: require('path').join(__dirname, 'gulp-tasks'),
  pkg: require('./package.json'),
  cfg: require('./config.json')
});
```
And in your task script file,
```js
module.exports = function task(gulp, $, opts){
  gulp.task('jshint', function(){
    return gulp.src(opts.cfg.src).pipe($.jshint({defaultFile:'jshint.rc'}))
      .pipe($.jshint.reporter('jshint-stylish'));
  });
}
```
This module uses 'gulp-load-plugins' to load gulp plugins, and attaches them to the '$' argument;
