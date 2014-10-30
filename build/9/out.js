// class
"use strict";

var _extends = function(child, parent) {
  child.prototype = Object.create(parent.prototype, {
    constructor: {
      value: child,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });

  child.__proto__ = parent;
};

module.exports = function() {
  var C = function(Array) {
    var C = function C() { this.b = true; };
    _extends(C, Array);

    Object.defineProperties(C.prototype, {
      a: {
        writable: true,
        value: function() {}
      }
    });

    Object.defineProperties(C, {
      d: {
        writable: true,
        value: function() {}
      }
    });

    return C;
  }(Array);

  return C.d && new C().a && new C().b && new C() instanceof Array;
};