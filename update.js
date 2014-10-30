var fs = require('fs');
var data = require('./compat-table/data-es6');
var currentVersion = 'v1.10.7';

var tests = data.tests.map(function(test) {
  test.res['6to5'] = false;
  return test;
});
var result = fs.readFileSync('./result/' + currentVersion).toString().split('\n');

console.log(tests);

/*

result.forEach(function(name) {

});
*/
