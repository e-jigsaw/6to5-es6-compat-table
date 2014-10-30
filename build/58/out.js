// Symbol.iterator
"use strict";
module.exports = function() {
  var a = 0, b = {};
  b[Symbol.iterator] = function() {
    return {
      next: function() {
        return {
          done: a === 1,
          value: a++
        };
      }
    };
  };
  var c;

  for (var _iterator = b[Symbol.iterator](), _step; !(_step = _iterator.next()).done; ) {
    c = _step.value;
  }

  return c === 0;
};