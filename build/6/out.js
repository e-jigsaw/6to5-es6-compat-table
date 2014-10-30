// spread call (...) operator
"use strict";
module.exports = function() {

    return Math.max.apply(Math, [1, 2, 3]) === 3
  
};