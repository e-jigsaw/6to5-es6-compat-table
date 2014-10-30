// string spreading
"use strict";
var _slice = Array.prototype.slice;
module.exports = function() {

    return ["a"].concat(_slice.call("bcd"), ["e"])[3] === "d" && Math.max.apply(Math, _slice.call("1234")) === 4;
  
};