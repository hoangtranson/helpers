const { toLowercase, splitBy } = require("./string");
const { compose } = require("./fn");
const { toString } = require("./transform");
const { firstElement, secondElement } = require("./array");

const URLModule = () => {
  const getKey = compose(splitBy("="), firstElement, toString, toLowercase);
  const getValue = compose(splitBy("="), secondElement);
  const getQuery = compose(splitBy("?"), secondElement, splitBy("&"));

  const extractQueryParams = (query) => {
    if (!query) {
      return {};
    }
    if (splitBy("?")(query).length < 2) return {};

    let params = {}, queries;
    queries = getQuery(query);
    queries.forEach((item) => {
      const _key = getKey(item);
      const _value = getValue(item);
      params[_key] = decodeURIComponent(_value);
    });
    return params;
  };

  return {
    extractQueryParams,
  };
};

module.exports = URLModule();
