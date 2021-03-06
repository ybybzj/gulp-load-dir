module.exports = function extend(target, o) {
  var mergingObjs = [].slice.call(arguments, 0);
  return mergingObjs.reduce(function(result, obj) {
    if (Object.prototype.toString.call(obj) === '[object Object]') {
      Object.keys(obj).forEach(function(k) {
        result[k] = obj[k];
      });
    }
    return result;
  }, Object.create(null));
};