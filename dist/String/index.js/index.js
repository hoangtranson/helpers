"use strict";

var _require = require("../Is"),
    isHTML = _require.isHTML;

var _require2 = require("../Fn"),
    compose = _require2.compose;

var _require3 = require("../Transform"),
    toString = _require3.toString;

var StringModule = function StringModule() {
  var trim = function trim(str) {
    return str.trim();
  };

  var toLowercase = function toLowercase(str) {
    return str.toLowerCase();
  };

  var addHyphen = function addHyphen(str) {
    return str.replace(/\s+/g, "-");
  };

  var splitBy = function splitBy(delimiter) {
    return function (str) {
      return str.split(delimiter);
    };
  };

  var stripHTMLTags = function stripHTMLTags(str) {
    if (!isHTML(str)) {
      throw new Error("Input is not HTML.");
    }

    return str.replace(/<[^>]*>/g, "");
  };

  var slugify = compose(toString, trim, addHyphen, toLowercase);
  return {
    stripHTMLTags: stripHTMLTags,
    slugify: slugify,
    toLowercase: toLowercase,
    splitBy: splitBy
  };
};

module.exports = StringModule();
//# sourceMappingURL=index.js.map
