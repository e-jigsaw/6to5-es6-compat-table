// Global symbol registry
"use strict";
module.exports = function() {

    var symbol = Symbol.for('foo');
    return Symbol.for('foo') === symbol &&
           Symbol.keyFor(symbol) === 'foo';
  
};