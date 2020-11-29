const test = require('ava');
const { formatNumber } = require('../lib');

const TestCases = [
    {
        input: 100,
        output: "100"
    },
    {
        input: 100000,
        output: "100,000"
    },
    {
        input: "90000",
        output: "90,000"
    },
    {
        input: 90000,
        delimiter: ".",
        output: "90.000",
    },
];


TestCases.forEach( item => {
    test(`formatNumber ${item.input} should return ${item.output}`, t => {
        try {
            const _output = formatNumber(item.input, item.delimiter);
            t.is(_output, item.output);
        }catch(error) {
            t.is(error.message, item.output);
        }
        
    })
})