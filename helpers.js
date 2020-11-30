const StringModule = require('./lib/string');
const NumberModule = require('./lib/number');
const IsModule = require('./lib/is');
const URLModule = require('./lib/url');

module.exports = {
    ...StringModule,
    ...NumberModule,
    ...IsModule,
    ...URLModule
};