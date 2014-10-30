// for..of loops
"use strict";
module.exports = function() {
  var arr = [5];

  for (var _iterator = arr[Symbol.iterator](), _step; !(_step = _iterator.next()).done; ) {
    var item = _step.value;
    return item === 5;
  }
};