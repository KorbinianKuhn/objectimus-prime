# Objectimus Prime

[![Greenkeeper badge](https://badges.greenkeeper.io/KorbinianKuhn/objectimus-prime.svg)](https://greenkeeper.io/)

[![Travis](https://img.shields.io/travis/KorbinianKuhn/objectimus-prime.svg)](https://travis-ci.org/KorbinianKuhn/objectimus-prime/builds)
[![Coverage Status](https://coveralls.io/repos/github/KorbinianKuhn/objectimus-prime/badge.svg?branch=master)](https://coveralls.io/github/KorbinianKuhn/objectimus-prime?branch=master)
[![Known Vulnerabilities](https://snyk.io/test/github/KorbinianKuhn/objectimus-prime/badge.svg)](https://snyk.io/test/github/KorbinianKuhn/objectimus-prime) 
[![dependencies](https://david-dm.org/KorbinianKuhn/objectimus-prime.svg)]()
[![npm](https://img.shields.io/npm/dt/@korbiniankuhn/objectimus-prime.svg)](https://www.npmjs.com/package/@korbiniankuhn/objectimus-prime)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)]()

Objectimus Prime is the chief transformer for parsing javascript objects e.g. transforming data before sending the response of an REST API. Depending on your needs you can blacklist (`remove`) or whitelist (`filter`) keys, perform math operations (`round`, `floor`, `ceil`), `rename` or `copy` keys or call custom functions...

The lib tries to detect if you operate on objects or arrays automatically. To transform the values of a key it provides special functions e.g. `valueRemove`, `valueFilter`.

The keys are always defined as paths and can access nested objects by dot separation `deep.deeper.evendeeper`.

## Installation

For installation use the [Node Package Manager](https://github.com/npm/npm):

```
$ npm install --save @korbiniankuhn/objectimus-prime
```

or clone the repository:

```
$ git clone https://github.com/KorbinianKuhn/objectimus-prime
```

## Getting started

Initialize the parser and call the functions you need. Finish with the data function to parse your object. Function will be executed in the given order and can be used multiple times.

``` javascript
const objectimus = require('@korbiniankuhn/objectimus-prime');

objectimus()
  .remove('a','b','parent.child')
  .rename('c', 'd')
  .round('numbers', 'another.one')
  .data(object);
```

You can also create a parser and reuse it in different parts of your script.

``` javascript
const myObjectimus = objectimus().round('a','b','c');

myObjectimus.data(someDate);

myObjectimus.data(differenData);
```

## API

### `remove(...keys)`

Removes the given keys from the object.

``` javascript
const object = {
  _id: 0,
  age: 25,
  name: 'Jane Doe'
};
objectimus().remove('_id', 'age').data(object);
// { name: 'Jane Doe' }

const array = [{
  _id: 0,
  age: 25,
  name: 'Jane Doe'
}];
objectimus().remove('_id', 'age').data(array);
// [{ name: 'Jane Doe' }]
```

### `valueRemove(path, ...keys)`

``` javascript
const object = {
  parent: {
    _id: 1,
    age: 25,
    name: 'Jane Doe'
  }
};
objectimus().valueRemove('parent', '_id', 'age').data(object);
// { parent: { name: 'Jane Doe' } }
```

### `deepRemove(...keys)`

``` javascript
const object = {
  _id: 1,
  age: 25,
  name: 'Jane Doe',
  parent: {
    _id: 2
  }
};
objectimus().deepRemove('_id', 'age').data(object);
// { parent: { name: 'Jane Doe', parent: {} } }
```

### `filter(...keys)`

Filter the keys from the object and remove all others.

``` javascript
const object = {
  _id: 0,
  age: 25,
  name: 'Jane Doe'
};
objectimus().filter('name').data(object);
// { name: 'Jane Doe' }

const array = [{
  _id: 0,
  age: 25,
  name: 'Jane Doe'
}];
objectimus().filter('name').data(array);
// [{ name: 'Jane Doe' }]
```

### `valueFilter(path, ...keys)`

``` javascript
const object = {
  parent: {
    _id: 1,
    age: 25,
    name: 'Jane Doe'
  }
};
objectimus().valueFilter('parent', 'name', 'age').data(object);
// { parent: { name: 'Jane Doe', age: '25' } }
```

### `rename(key, target)`

Rename a key.

``` javascript
const object = {
  _id: 0
};
objectimus().rename('_id', 'id').data(object);
// { id: 0 }

const array = [{
  _id: 0
}];
objectimus().rename('_id', 'id').data(array);
// [{ id: 0 }]
```

### `copy(key, target)`

Duplicate a key.

``` javascript
const object = {
  old: 0
};
objectimus().copy('old', 'new').data(object);
// { old: 0, new: 0 }

const array = [{
  old: 0
}];
objectimus().copy('old', 'new').data(array);
// [{ old: 0, new: 0 }]
```

### `round(precision, ...keys)`

Round numbers mathematical.

``` javascript
objectimus().round(1, 'number').data({ number: 2.35 });
// { number: 2.4 }

objectimus().round(1, 'number').data([{ number: 2.35 }]);
// [{ number: 2.4 }]

objectimus().round(1, 'number').data({ numbers: [2.35] });
// { numbers: [2.4] }
```

### `floor(precision, ...keys)`

Round numbers down.

``` javascript
objectimus().floor(1, 'number').data({ number: 2.37 });
// { number: 2.3 }

objectimus().floor(1, 'number').data([{ number: 2.37 }]);
// [{ number: 2.3 }]

objectimus().floor(1, 'number').data({ numbers: [2.37] });
// { numbers: [2.3] }
```

### `ceil(precision, ...keys)`

Round numbers up.

``` javascript
objectimus().ceil(1, 'number').data({ number: 2.32 });
// { number: 2.4 }

objectimus().ceil(1, 'number').data([{ number: 2.35 }]);
// [{ number: 2.4 }]

objectimus().ceil(1, 'number').data({ numbers: [2.35] });
// { numbers: [2.4] }
```

### `sign(...keys)`

Convert numbers to strings and add leading plus or minus signs.

``` javascript
objectimus().sign(1, 'number').data({ number: -2.32 });
// { number: '-2.32' }

objectimus().sign(1, 'number').data([{ number: 2.35 }]);
// [{ number: '+2.35' }]

objectimus().sign(1, 'number').data({ numbers: [0] });
// { numbers: ['0'] }
```

## Testing

First you have to install all dependencies:

```
$ npm install
```

To execute all unit tests once, use:

```
$ npm test
```

To get information about the test coverage, use:

```
$ npm run coverage
```

## Contribution

Fork this repository and push in your ideas.

Do not forget to add corresponding tests to keep up 100% test coverage.

## License

The MIT License

Copyright (c) 2018 Korbinian Kuhn

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.