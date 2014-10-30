// Symbol.isRegExp
"use strict";
module.exports = function() {

    return RegExp.prototype[Symbol.isRegExp] === true;
  
};