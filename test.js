"use strict";
var fs  = require('fs');
var to5 = require('6to5');

var dirs = fs.readdirSync('./build');

for(var _dir in dirs) {
  try {
    var _compiledCode = to5.transformFileSync('./build/' + _dir + '/in.js').code;
    fs.writeFileSync('./build/' + _dir + '/out.js', _compiledCode);
  } catch (err) {
    console.log(err);
  }
}


