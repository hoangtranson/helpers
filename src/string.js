const { isHTML } = require("./is");
const { compose } = require("./fn");
const { toString } = require("./transform");

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

  const matchPatterns = patterns => {
    const masterPattern = new RegExp(patterns.join('|'));
    return input => masterPattern.test(input);
  }

  return {
    stripHTMLTags,
    slugify,
    toLowercase,
    splitBy,
    matchPatterns
  };
};

module.exports = StringModule();
