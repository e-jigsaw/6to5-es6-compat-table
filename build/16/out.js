// generators (yield)
"use strict";
module.exports = function() {

    var generator = (regeneratorRuntime.mark(function callee$1$0() {
      return regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          return context$2$0.delegateYield(regeneratorRuntime.mark(function callee$2$0() {
            return regeneratorRuntime.wrap(function callee$2$0$(context$3$0) {
              while (1) switch (context$3$0.prev = context$3$0.next) {
              case 0:
                context$3$0.next = 2;
                return 5;
              case 2:
                context$3$0.next = 4;
                return 6;
              case 4:
              case "end":
                return context$3$0.stop();
              }
            }, callee$2$0, this);
          })(), "t0", 1);
        case 1:
        case "end":
          return context$2$0.stop();
        }
      }, callee$1$0, this);
    })());

    var item = generator.next();
    var passed = item.value === 5 && item.done === false;
    item = generator.next();
    passed    &= item.value === 6 && item.done === false;
    item = generator.next();
    passed    &= item.value === undefined && item.done === true;
    return passed;
  
};