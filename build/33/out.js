// destructuring
"use strict";
module.exports = function() {
  var _ref = [5, null, [6]];
  var a = _ref[0];
  var b = _ref[2][0];
  var g = _ref[3];
  var _ref2 = {c:7, x:8};
  var c = _ref2.c;
  var d = _ref2.x;
  var h = _ref2.h;
  var _ref3 = [9, {x:10}];
  var e = _ref3[0];
  var f = _ref3[1].x;
  var i = _ref3[1].i;

  return a === 5 && b === 6 && c === 7 &&
         d === 8 && e === 9 && f === 10 &&
         g === undefined && h === undefined && i === undefined;
};