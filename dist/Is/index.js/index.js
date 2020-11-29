"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var IsModule = function IsModule() {
  var regEmail = /.+@.+\..+/;

  var isArray = function isArray(_arr) {
    return Array.isArray(_arr);
  };

  var isObject = function isObject(_object) {
    return (typeof item === "undefined" ? "undefined" : _typeof(item)) === "object" && Array.isArray(_object) === false && _object !== null;
  };

  var isFunction = function isFunction(_func) {
    return typeof _func === "function";
  };

  var isEmail = function isEmail(_email) {
    return regEmail.test(val);
  };

  var isHTML = function isHTML(str) {
    return !(str || '').replace(/<([^>]+?)([^>]*?)>(.*?)<\/\1>/ig, '').replace(/(<([^>]+)>)/ig, '').trim();
  };

  return {
    isArray: isArray,
    isObject: isObject,
    isFunction: isFunction,
    isEmail: isEmail,
    isHTML: isHTML
  };
};

module.exports = IsModule();
//# sourceMappingURL=index.js.map
