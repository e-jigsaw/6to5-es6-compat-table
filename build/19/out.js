// template strings
"use strict";
module.exports = function() {

    var a = "ba", b = "QUX";
    return "foo bar\n" + (a + "z") + " " + b.toLowerCase() === "foo bar\nbaz qux";
  
};