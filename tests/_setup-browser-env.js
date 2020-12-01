const browserEnv = require('browser-env');

// https://github.com/avajs/ava/blob/master/docs/recipes/browser-testing.md
browserEnv(['window', 'document', 'navigator']);