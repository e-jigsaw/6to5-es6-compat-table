// super
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

    var passed = true;
    var B = function(_ref) {
      var _class = function(a) {
        this.id = 'AB';
        // "super" in the constructor calls
        // the superclass's constructor on "this".
        passed &= _ref.call(this, a)     === 'ABCD';
        // "super" can be also used to call
        // superclass methods on "this".
        passed &= _ref.prototype.foo.call(this, a) === 'CDAB';
      };

      _extends(_class, _ref);

      Object.defineProperties(_class.prototype, {
        foo: {
          writable: true,

          value: function(a) {
            passed &= _ref.prototype.foo.call(this, a) === 'YZEF';
          }
        }
      });

      return _class;
    }(class {
      constructor(a) { return this.id + a; }
      foo(a) { return a + this.id; }
    })
    var b = new B("CD");
    // "super" is bound statically, even though "this" isn't
    var obj = { foo: b.foo, id:"EF" };
    obj.foo("YZ");
    return passed;
  
};