const NumberModule = () => {
  const formatNumber = (number, delimiter = ",") => {
    let str = String(number);
    let s = "";
    let count = 0;
    for (let i = str.length - 1; i >= 0; i--) {
      s = str[i] + s;
      count++;
      if (count % 3 == 0 && i != 0) {
        s = delimiter + s;
      }
    }
    return s;
  };

  return {
    formatNumber,
  };
};

module.exports = NumberModule();
