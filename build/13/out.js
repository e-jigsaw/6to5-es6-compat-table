// shorthand methods
"use strict";
module.exports = function() {

    return ({ y: function() { return 2; } }).y() === 2;
  
};