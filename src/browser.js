const BrowserModule = () => {
    const isCookieDisabled = () => {
        let cookieEnabled = navigator.cookieEnabled;
        if (!cookieEnabled) {
            document.cookie = 'cookieEnabled';
            cookieEnabled = document.cookie.indexOf('cookieEnabled') != -1;
        }
        return !cookieEnabled;
    }

    return {
      isCookieDisabled
    };
  };
  
  module.exports = BrowserModule();
  