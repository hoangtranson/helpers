const test = require('ava');
const { isCookieDisabled } = require('../src/browser');

test(`isCookieDisabled should return false`, t => {
    const _output = isCookieDisabled();
    t.is(_output, false);
});
