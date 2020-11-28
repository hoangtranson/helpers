const StringModule = require('./String');
const NumberModule = require('./Number');

module.exports = {
    ...StringModule,
    ...NumberModule
};