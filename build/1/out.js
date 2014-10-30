// arrow functions
"use strict";
module.exports = function () {
    try {
      var a = function() {
        return 5;
      };;
    } catch (e) {
      return false;
    }
    return true;
  }