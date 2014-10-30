var data = require('./compat-table/data-es6');

data.tests.forEach(function(test, i) {
  try {
    let result = require('./build/' + i.toString() + '/out')();
    if(result) {
      console.log(test.name);
    }
  } catch(err) {}
});
