const test = require('ava');
const { matchPatterns } = require('../src/string');

const TestCases = [
    {
        patterns: [".*@gmail.com$", ".*@yahoo.com$", ".*@live.com$"],
        input: "user1@gmail.com",
        output: true
    },
    {
      patterns: [".*@gmail.com$", ".*@yahoo.com$", ".*@live.com$"],
      input: "user1@yopmail.com",
      output: false
  }
];


TestCases.forEach( item => {
    test(`matchPatterns ${item.input} should return ${item.output}`, t => {
        try {
            const _output = matchPatterns(item.patterns)(item.input);
            t.is(_output, item.output);
        }catch(error) {
            t.is(error.message, item.output);
        }
        
    })
})