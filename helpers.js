const StringModule = require('./lib/string');
const NumberModule = require('./lib/number');
const IsModule = require('./lib/is');
const URLModule = require('./lib/url');
const BrowserModule = require('./lib/browser');

module.exports = {
    ...StringModule,
    ...NumberModule,
    ...IsModule,
    ...URLModule,
    ...BrowserModule
};