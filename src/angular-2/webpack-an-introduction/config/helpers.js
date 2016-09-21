var path = require('path');
var _root = path.resolve(__dirname, '..');

function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [_root].concat(args));
}


function getPath(relativePath) {
  return path.join(__dirname, relativePath);
}

exports.root = root;

exports.getPath = getPath;
