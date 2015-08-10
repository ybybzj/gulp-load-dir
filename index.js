var gulp = require('gulp');
var $ = require('gulp-load-plugins');
var $node = {
  path: require('path')
};
var extend = require('./lib/extend');
var defaultOptions = {
  dir: $node.path.join(process.cwd(), 'gulp','tasks')
};
module.exports = function loadTasks(options){
  options = extend(defaultOptions, options);
  var tasks = require('rqdir')(options.dir);
  delete options.dir;
  Object.keys(tasks).forEach(function(loaderName){
    tasks[loaderName](gulp, $, options);
  });
};

// console.log(defaultOptions.taskDir);