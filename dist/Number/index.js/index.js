"use strict";

var NumberModule = function NumberModule() {
  var formatNumber = function formatNumber(number) {
    var delimiter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ",";
    var str = String(number);
    var s = "";
    var count = 0;

    for (var i = str.length - 1; i >= 0; i--) {
      s = str[i] + s;
      count++;

      if (count % 3 == 0 && i != 0) {
        s = delimiter + s;
      }
    }

    return s;
  };

  return {
    formatNumber: formatNumber
  };
};

module.exports = NumberModule();
//# sourceMappingURL=index.js.map
