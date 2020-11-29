const FnModule = () => {
  const compose = (...fns) => (...args) =>
    fns.reduce((res, fn) => [fn.call(null, ...res)], args)[0];

  return {
    compose,
  };
};

module.exports = FnModule();
