"use strict";

var TransformModule = function TransformModule() {
  var toString = function toString(_value) {
    return !_value ? "" : _value.toString();
  };

  return {
    toString: toString
  };
};

module.exports = TransformModule();
//# sourceMappingURL=index.js.map
