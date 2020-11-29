const IsModule = () => {
  const regEmail = /.+@.+\..+/;

  const isArray = _arr => Array.isArray(_arr);
  const isObject = _object =>
    typeof item === "object" && Array.isArray(_object) === false && _object !== null;
  const isFunction = _func => typeof _func === "function";
  const isEmail = _email => regEmail.test(val);
  const isHTML = (str) => !(str || '')
  .replace(/<([^>]+?)([^>]*?)>(.*?)<\/\1>/ig, '')
  .replace(/(<([^>]+)>)/ig, '')
  .trim();

  return {
    isArray,
    isObject,
    isFunction,
    isEmail,
    isHTML
  };
};

module.exports = IsModule();
