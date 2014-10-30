// const
"use strict";
module.exports = function () {
    try {
      return (function () { var _foobarbaz = 12; return typeof _foobarbaz === "number"; }());
    } catch (e) {
      return false;
    }
  }