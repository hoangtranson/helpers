const { isHTML }  = require('../Is');

const StringModule = () => {
  const stripHTMLTags = (str) => {
    if (!isHTML(str)) {
      throw new Error("Input is not HTML.");
    }
    return str.replace(/<[^>]*>/g, "");
  };

  return {
    stripHTMLTags,
  };
};

module.exports = StringModule();
