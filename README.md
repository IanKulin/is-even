# @iankulin/is-even [![NPM version](https://img.shields.io/npm/v/@iankulin/is-even.svg?style=flat)](https://www.npmjs.com/package/@iankulin/is-even) [![NPM total downloads](https://img.shields.io/npm/dt/@iankulin/is-even.svg?style=flat)](https://npmjs.org/package/@iankulin/is-even)


* A simple utility to check if a number is even.
* Demo project for a [blog post](https://devendevour.wordpress.com/2024/10/14/code-reuse-by-publishing-to-npm/) about publishing code to npm.

## Installation

```bash
npm install @iankulin/is-even
```

## Usage

```javascript
import { isEven } from '@iankulin/is-even';

console.log(isEven(4));  // true
console.log(isEven(7));  // false
console.log(isEven(0));  // true
console.log(isEven(-2)); // true
```

## Changelog

- **1.0.0** - initial
- **1.0.1** - added types
- **1.0.3** - move to workflow for publishing

## License

MIT  
[Source](https://github.com/IanKulin/is-even)