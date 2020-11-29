"use strict";

var _require = require("../String"),
    toLowercase = _require.toLowercase,
    splitBy = _require.splitBy;

var _require2 = require("../Fn"),
    compose = _require2.compose;

var _require3 = require("../Transform"),
    toString = _require3.toString;

var _require4 = require("../Array"),
    firstElement = _require4.firstElement,
    secondElement = _require4.secondElement;

var URLModule = function URLModule() {
  var getKey = compose(splitBy("="), firstElement, toString, toLowercase);
  var getValue = compose(splitBy("="), secondElement);
  var getQuery = compose(splitBy("?"), secondElement, splitBy("&"));

  var extractQueryParams = function extractQueryParams(query) {
    if (!query) {
      return {};
    }

    if (splitBy("?")(query).length < 2) return {};
    var params = {},
        queries;
    queries = getQuery(query);
    queries.forEach(function (item) {
      var _key = getKey(item);

      var _value = getValue(item);

      params[_key] = decodeURIComponent(_value);
    });
    return params;
  };

  return {
    extractQueryParams: extractQueryParams
  };
};

module.exports = URLModule();
//# sourceMappingURL=index.js.map
