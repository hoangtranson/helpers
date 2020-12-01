const BrowserModule = () => {
  const isCookieDisabled = () => {
    const cookies =
      "cookie" in document &&
      (document.cookie.length > 0 ||
        (document.cookie = "test").indexOf.call(document.cookie, "test") > -1);
    return !cookies;
  };

  return {
    isCookieDisabled,
  };
};

module.exports = BrowserModule();
