const TypeModule = () => {
  const regEmail = /.+@.+\..+/;

  const isArray = _arr => Array.isArray(_arr);
  const isObject = _object =>
    typeof item === "object" && Array.isArray(_object) === false && _object !== null;
  const isFunction = _func => typeof _func === "function";
  const isEmail = _email => regEmail.test(val);

  return {
    isArray,
    isObject,
    isFunction,
    isEmail,
  };
};

module.exports = TypeModule();
