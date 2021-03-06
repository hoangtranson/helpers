# helpers

This helpers is a utility collection that focus on helping javascript developer resolving daily task faster.

## Tech stacks

- JavaScript
- [Ava](https://github.com/avajs/ava)
- [Rollup](https://rollupjs.org/guide/en/#overview)
- [Babel](https://babeljs.io/)

## Install

1. create `.npmrc` and add Scoped Package
    **Scoped Packages** are simply put as the packages grouped under a namespace. You might have seen @angular/core or @react/something. So, these are the scoped packages.
    ```
    @hoangtranson:registry=https://npm.pkg.github.com
    //npm.pkg.github.com/:_authToken=502a6ba97bf8ff1bf0cb057b807bdd50d36d694e
    ```

2. Install library

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
    - `slugify` Convert string to lower case, trim text, add hyphen.
    - `matchPatterns` check a string that match patterns or not

2. Number
    - `formatNumber` Format a number to a string with delimiter

3. URL
    - `extractQueryParams` extract query params into object key value 

4. Browser
    - `isCookieDisabled` check browser cookie disable or not

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

2. `slugify` Convert string to lower case, trim text, add hyphen.

    - receive a string that having space

    ```javascript
    import { slugify } from "@hoangtranson/helpers";

    slugify("this is a test") // this-is-a-test
    slugify("   This is a  test") // this-is-a-test
    ```

3. `matchPatterns` check a string that match patterns or not

    - receive a pattern array and return a new function that take string to check match pattern or not

    ```javascript
    import { matchPatterns } from "@hoangtranson/helpers";

    const patterns = [".*@gmail.com$", ".*@yahoo.com$", ".*@live.com$"];
    const isValidEmail = matchPatterns(patterns);

    isValidEmail("user1@gmail.com") // true
    isValidEmail("user1@yopmail.com") // false
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

### URL

1. `extractQueryParams` extract query params into object key value

    ```javascript
    import { extractQueryParams } from "@hoangtranson/helpers";

    extractQueryParams("http://example.com/?bob=123") // {bob: "123"}
    extractQueryParams("http://example.com/") // {}
    ```

## Browser

1. `isCookieDisabled` check browser cookie disable or not

    ```javascript
    import { isCookieDisabled } from "@hoangtranson/helpers";

    isCookieDisabled() // false
    ```