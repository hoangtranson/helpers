const test = require('ava');
const { isCookieDisabled } = require('../src/browser');

test(`isCookieDisabled should return false in case of cookieEnabled`, t => {
    navigator.cookieEnabled = true;
    const _output = isCookieDisabled();
    t.is(_output, false);
});

test.only(`isCookieDisabled should return true in case of cookieEnabled`, t => {
    navigator.cookieEnabled = false;
    const _output = isCookieDisabled();
    t.is(_output, true);
});