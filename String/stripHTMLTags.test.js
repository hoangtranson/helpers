const test = require('ava');
const { stripHTMLTags } = require('.');

const TestCases = [
    {
        input: "<h1>test</h1>",
        output: "test"
    }
];

TestCases.forEach( item => {
    test(`stripHTMLTags ${item.input} should return ${item.output}`, t => {
        const _output = stripHTMLTags(item.input);
        t.is(_output, item.output);
    })
})