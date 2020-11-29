const test = require('ava');
const { stripHTMLTags } = require('../src/string');

const TestCases = [
    {
        input: "<h1>test</h1>",
        output: "test"
    },
    {
        input: `<p>My mother has <span style="color:blue;font-weight:bold">blue</span> eyes and my father has <span style="color:darkolivegreen;font-weight:bold">dark green</span> eyes.</p>`,
        output: "My mother has blue eyes and my father has dark green eyes."
    },
    {
        input: "<h1>test<h1",
        output: "Input is not HTML."
    }
];

TestCases.forEach( item => {
    test(`stripHTMLTags ${item.input} should return ${item.output}`, t => {
        try {
            const _output = stripHTMLTags(item.input);
            t.is(_output, item.output);
        }catch(error) {
            t.is(error.message, item.output);
        }
        
    })
})