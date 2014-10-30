// default function parameters
"use strict";
module.exports = function() {

    var passed = (function(a, b) {
      if (b === undefined)
        b = 2;

      if (a === undefined)
        a = 1;

      return a === 3 && b === 2;
    }(3));

    // explicit undefined will defer to the default
    passed    &= (function(a, b) {
      if (b === undefined)
        b = 2;

      if (a === undefined)
        a = 1;

      return a === 1 && b === 3;
    }(undefined, 3));

    // defaults can refer to previous parameters
    passed    &= (function(a, b) {
      if (b === undefined)
        b = a;

      return b === 5;
    }(5));

    return passed;
  
};