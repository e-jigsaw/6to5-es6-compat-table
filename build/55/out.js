// Symbol.hasInstance
"use strict";
module.exports = function() {

    var passed = false;
    var obj = { foo: true };
    var C = function(){};
    C[Symbol.hasInstance] = function(inst) { passed = inst.foo; return false; };
    obj instanceof C;
    return passed;
  
};