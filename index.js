const StringModule = require('./String');
const NumberModule = require('./Number');
const IsModule = require('./Is');
const URLModule = require('./Url');

module.exports = {
    ...StringModule,
    ...NumberModule,
    ...IsModule,
    ...URLModule
};