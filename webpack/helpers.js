/* eslint-disable no-undef */
const path = require('path');

const _root = path.resolve(__dirname, '../');

exports.root = (args) => {
  args = Array.prototype.slice.call(arguments, 0);

  return path.join.apply([ _root ].concat(args));
};

exports.assetsPath = (_path) => path.posix.join('static', _path);
