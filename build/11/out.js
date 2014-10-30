// computed properties
"use strict";
module.exports = function() {

    var x = 'y';
    return (function(_ref) {
      _ref[x] = 1;
      return _ref;
    }({})).y === 1;
  
};