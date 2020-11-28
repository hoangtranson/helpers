const TypeModule = () => {
    const isArray = item => Array.isArray(item);
    const isObject =  item => typeof item === 'object' && Array.isArray(item) === false && item !== null;
    const isFunction = item => typeof item === 'function';

    return {
      isArray,
      isObject,
      isFunction
    };
  };
  
  module.exports = TypeModule();
  