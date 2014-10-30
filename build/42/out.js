// function "name" property
"use strict";
module.exports = function () {
    return (function foo(){}).name == 'foo';
  }