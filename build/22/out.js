// RegExp "u" flag
"use strict";
module.exports = function() {

    return "𠮷".match(/(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uDC00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF])/)[0].length === 2;
  
};