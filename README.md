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
