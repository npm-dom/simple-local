# simple-local
[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]

Simple wrapper for localStorage. Makes dealing with localStorage
less tedious. Calls `JSON.parse` and `JSON.stringify` for you and enables a
smooth debugging experience.

## Installation
```bash
$ npm i --save simple-local
```
## Overview
```js
var local = require('simple-local');

local.set('myKey', {foo: 'bar', bin: 'baz'});

user.get('myKey')
// => {foo: 'bar', bin: 'baz'}
```

## Debugging
To enable debugging open your browser's console and set:
```
❯ localStorage.debug = 'simple-local';
```

## API
#### .set(value)
Set the store to contain a value at key.
```js
store.set('key', 12348899);
store.set('config', ['foo', 'bar']);
```

#### .get(namespace)
Get a value from the store. Emits a `get` event which can
be namespaced to allow for specific listeners.
```js
store.get('config');
// => ['foo', 'bar']
```

## License
[MIT](https://tldrlegal.com/license/mit-license) ©
[Yoshua Wuyts](yoshuawuyts.com)

[npm-image]: https://img.shields.io/npm/v/simple-local.svg?style=flat-square
[npm-url]: https://npmjs.org/package/simple-local
[travis-image]: https://img.shields.io/travis/yoshuawuyts/simple-local.svg?style=flat-square
[travis-url]: https://travis-ci.org/yoshuawuyts/simple-local
[coveralls-image]: https://img.shields.io/coveralls/yoshuawuyts/simple-local.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/yoshuawuyts/simple-local?branch=master
