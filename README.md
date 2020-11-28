# helpers

## Tech stacks

- JavaScript
- Ava

## Install

```
npm install @hoangtranson/helpers
```

## Benefits

- Small bundle size
- Work with all frameworks
- Simple to use

## Features

1. String
    - `stripHTMLTags` Delete HTML tag in string

2. Number
    - `formatNumber` Format a number to a string with delimiter

## Usage

Guide to use the library.

### String

1. `stripHTMLTags` Delete HTML tag in string

    - if valid return text without html tag
    - if invalid (not HTML string) return `Error('Input is not HTML')`

    ```javascript
    import { stripHTMLTags } from "@hoangtranson/helpers";

    stripHTMLTags("<h1>test</h1>") // test
    stripHTMLTags("<h1>test<h1") // throw error Input is not HTML.
    ```

### Number

1. `formatNumber` Format a number to a string with delimiter

    - first parameter is number. It should be number or number with type string.
    - second parameter is delimiter. default is comma.


    ```javascript
    import { formatNumber } from "@hoangtranson/helpers";

    formatNumber(1000) // 1,000
    formatNumber("1000") // 1,000
    formatNumber(1000, ".") // 1.000
    ```