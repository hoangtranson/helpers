# helpers

## Tech stacks

- JavaScript
- [Ava](https://github.com/avajs/ava)

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

2. Number
    - `formatNumber` Format a number to a string with delimiter

3. URL
    - `extractQueryParams` extract query params into object key value 
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
