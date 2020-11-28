const StringModule = () => {
  const stripHTMLTags = (str) => {
    if (!isHTML(str)) {
      throw new Error("Input is not HTML.");
    }
    return str.replace(/<[^>]*>/g, "");
  };

  const isHTML = (str) => !(str || '')
  .replace(/<([^>]+?)([^>]*?)>(.*?)<\/\1>/ig, '')
  .replace(/(<([^>]+)>)/ig, '')
  .trim();

  return {
    stripHTMLTags,
  };
};

module.exports = StringModule();
