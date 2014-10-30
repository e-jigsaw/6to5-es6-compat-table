// Promise
"use strict";
module.exports = function () {
    return typeof Promise !== 'undefined' &&
           typeof Promise.all === 'function';
  }