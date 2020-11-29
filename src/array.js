const ArrayModule = () => {
  const firstElement = array => array[0];
  const secondElement = array => array[1];
  return {
    firstElement,
    secondElement
  };
};

module.exports = ArrayModule();
