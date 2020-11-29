const TransformModule = () => {
  const toString = (_value) => (!_value ? "" : _value.toString());

  return {
    toString,
  };
};

module.exports = TransformModule();
