const test = require('ava');
const { slugify } = require('../lib');

const TestCases = [
    {
        input: "this is a test",
        output: "this-is-a-test"
    },
    {
        input: "   This is a  test",
        output: "this-is-a-test"
    }
];

TestCases.forEach( item => {
    test(`slugify ${item.input} should return ${item.output}`, t => {
        try {
            const _output = slugify(item.input);
            t.is(_output, item.output);
        }catch(error) {
            t.is(error.message, item.output);
        }
    })
})