var gulp = require('gulp');
var $ = require('gulp-load-plugins');
var $node = {
  path: require('path')
};
var extend = require('./lib/extend');
var defaultOptions = {
  taskDir: $node.path.join(process.cwd(), 'gulp','tasks')
};
exports.loadTasks = function(options){
  options = extend(defaultOptions, options);
  var tasks = require('rqdir')(options.taskDir);
  delete options.taskDir;
  Object.keys(tasks).forEach(function(loaderName){
    tasks[loaderName](gulp, $, options);
  });
};

// console.log(defaultOptions.taskDir);