const StringModule = require('./String');
const NumberModule = require('./Number');
const IsModule = require('./Is');

module.exports = {
    ...StringModule,
    ...NumberModule,
    ...IsModule
};