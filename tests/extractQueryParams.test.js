const test = require("ava");
const { extractQueryParams } = require("../");

const TestCases = [
  {
    input: "http://example.com/?bob=123",
    output: {
      bob: "123",
    },
  },
  {
    input: "http://example.com/",
    output: {},
  },
  {
    input: "http://example.com/?foo=bar&bar=baz&foo=world",
    output: {
      foo: "bar",
      bar: "baz",
      foo: "world"
    },
  },
];

TestCases.forEach((item) => {
  test(`extractQueryParams ${item.input} should work correctly`, (t) => {
    try {
      const _output = extractQueryParams(item.input);
      t.deepEqual(_output, item.output);
    } catch (error) {
      t.is(error.message, item.output);
    }
  });
});
