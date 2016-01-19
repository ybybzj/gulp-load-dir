var loadPlugins = require('gulp-load-plugins');
var $node = {
  path: require('path')
};
var extend = require('./lib/extend');

var defaultOptions = {
  taskDir: $node.path.join(process.cwd(), 'gulp','tasks'),
  pkgFile: $node.path.join(process.cwd(), 'package.json')
};

module.exports = function loadTasks(gulp, options){
  options = extend(defaultOptions, options);
  var tasks = require('rqdir')(options.taskDir);
  var $ = loadPlugins({
    config: options.pkgFile,
  });
  try{
  options.gulpCfg = require($node.path.resolve(options.taskDir, 'config.json'));
  }catch(e){
    console.warn('[gulp-load-plugins]Cannot load gulp task configuration!');
  }
  Object.keys(tasks).forEach(function(loaderName){
    tasks[loaderName](gulp, $, options);
  });
};
