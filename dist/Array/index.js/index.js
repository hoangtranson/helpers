"use strict";

var ArrayModule = function ArrayModule() {
  var firstElement = function firstElement(array) {
    return array[0];
  };

  var secondElement = function secondElement(array) {
    return array[1];
  };

  return {
    firstElement: firstElement,
    secondElement: secondElement
  };
};

module.exports = ArrayModule();
//# sourceMappingURL=index.js.map
