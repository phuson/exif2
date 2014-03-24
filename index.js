
/**
 * Module dependencies.
 */

var exec = require('child_process').exec;
var command = require('shelly');

/**
 * Fetch EXIF data from `file` and invoke `fn(err, data)`.
 *
 * @param {String} file
 * @param {Function} fn
 * @api public
 */

module.exports = function(file, fn){
  // REM : exiftool options http://www.sno.phy.queensu.ca/~phil/exiftool/exiftool_pod.html
  // -json : ask JSON output
  var cmd = command('exiftool -json ?', file);
  exec(cmd, function(err, str){
    if (err) return fn(err);

    var obj = JSON.parse(str)[0]; // so easy

    fn(null, obj);
  });
};
