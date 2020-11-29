const { isHTML } = require("../Is");
const { compose } = require("../Fn");
const { toString } = require("../Transform");

const StringModule = () => {
  const trim = (str) => str.trim();
  const toLowercase = (str) => str.toLowerCase();
  const addHyphen = (str) => str.replace(/\s+/g, "-");
  const splitBy = delimiter => str => str.split(delimiter);

  const stripHTMLTags = (str) => {
    if (!isHTML(str)) {
      throw new Error("Input is not HTML.");
    }
    return str.replace(/<[^>]*>/g, "");
  };

  const slugify = compose(toString, trim, addHyphen, toLowercase);

  return {
    stripHTMLTags,
    slugify,
    toLowercase,
    splitBy
  };
};

module.exports = StringModule();
