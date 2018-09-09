#!/usr/bin/env node

let path = require('path');

let minimist = require('minimist');

module.exports = (file, opts) => {
  opts = Object.assign(
    {
      url: false,
    },
    opts
  );
  let fp = path.resolve(file);
  if (opts.url) {
    return 'file://' + fp;
  } else {
    return fp;
  }
};

if (require.main === module) {
  let opts = minimist(process.argv.slice(2));
  let files = opts._;
  if (files.length < 1) {
    files.push('.');
  }
  for (let file of files) {
    console.log(module.exports(file, opts));
  }
}
