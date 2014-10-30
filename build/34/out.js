// destructuring parameters
"use strict";
module.exports = function() {

    return (function(_ref, _ref2) {
      var a = _ref.a;
      var b = _ref.x;
      var c = _ref2[0];
      var d = _ref2[1];
      return a === 1 && b === 2 && c === 3 && d === 4;
    }({a:1, x:2},[3, 4]));
  
};