/*!
 * (c) Towry Wang, http://towry.me
 * Mit License
 */

'use strict';

var fs = require('fs');
var path = require('path');
var depsPlugin = require('deps-webpack-plugin');

// please dont change this.
var DEPEN_FILE = '_$webpackrails_dependencies';

module.exports = function (railRoot) {
  return new depsPlugin(callback);
}

function callback (deps) {
  var tmpPath = process.env['WR_TMP_FILE'], tmpFile;

  deps = deps || [];
  try {
    if (!tmpPath) {
      tmpPath = path.join(process.env['RAILS_ROOT'], 'tmp/webpackrails', DEPEN_FILE);
    }

    tmpFile = fs.openSync(tmpPath, 'w+');
    fs.writeSync(tmpFile, deps.join('\n'));
    fs.close(tmpFile);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}
