var fs  = require('fs');
var to5 = require('6to5');

var dirs = fs.readdirSync('./build');

for(let dir in dirs) {
  try {
    let compiledCode = to5.transformFileSync('./build/' + dir + '/in.js').code;
    fs.writeFileSync('./build/' + dir + '/out.js', compiledCode);
  } catch (err) {
    console.log(err);
  }
}
