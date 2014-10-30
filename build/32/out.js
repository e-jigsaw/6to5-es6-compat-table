// block-level function declaration
"use strict";
module.exports = function() {

    'use strict';
    {
      function f(){}
    }
    return typeof f === "undefined";
  
};