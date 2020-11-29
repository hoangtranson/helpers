const StringModule = require('./string');
const NumberModule = require('./number');
const IsModule = require('./is');
const URLModule = require('./url');

module.exports = {
    ...StringModule,
    ...NumberModule,
    ...IsModule,
    ...URLModule
};