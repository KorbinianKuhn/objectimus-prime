const _ = require('lodash');
const functions = require('./src');

var _operations = Symbol();

class Formatter {
  constructor() {
    this[_operations] = [];
  }

  data(data) {
    for (const operation of this[_operations]) {
      switch (operation[0]) {
        case 'filter':
          data = functions.filter(data, operation[1]);
          break;
        case 'valueFilter':
          functions.valueFilter(data, operation[1], operation[2]);
          break;
        case 'remove':
          functions.remove(data, operation[1]);
          break;
        case 'valueRemove':
          functions.valueRemove(data, operation[1], operation[2]);
          break;
        case 'deepRemove':
          functions.deepRemove(data, operation[1]);
          break;
        case 'round':
          functions.round(data, operation[1], operation[2]);
          break;
        case 'ceil':
          functions.ceil(data, operation[1], operation[2]);
          break;
        case 'floor':
          functions.floor(data, operation[1], operation[2]);
          break;
        case 'sign':
          functions.sign(data, operation[1]);
          break;
        case 'rename':
          functions.rename(data, operation[1], operation[2]);
          break;
        case 'copy':
          functions.copy(data, operation[1], operation[2]);
          break;
        case 'date':
          functions.date(data, operation[1], operation[2]);
          break;
      }
    }
    return data;
  }

  filter(...keys) {
    this[_operations].push(['filter', keys]);
    return this;
  }
  valueFilter(path, ...keys) {
    this[_operations].push(['valueFilter', path, keys]);
    return this;
  }

  remove(...keys) {
    this[_operations].push(['remove', keys]);
    return this;
  }

  valueRemove(path, ...keys) {
    this[_operations].push(['valueRemove', path, keys]);
    return this;
  }

  deepRemove(...keys) {
    this[_operations].push(['deepRemove', keys]);
    return this;
  }

  round(precision, ...keys) {
    this[_operations].push(['round', keys, precision]);
    return this;
  }

  ceil(precision, ...keys) {
    this[_operations].push(['ceil', keys, precision]);
    return this;
  }

  floor(precision, ...keys) {
    this[_operations].push(['floor', keys, precision]);
    return this;
  }

  rename(key, target) {
    this[_operations].push(['rename', key, target]);
    return this;
  }

  copy(key, target) {
    this[_operations].push(['copy', key, target]);
    return this;
  }

  sign(...keys) {
    this[_operations].push(['sign', keys]);
    return this;
  }

  date(format, ...keys) {
    this[_operations].push(['date', keys, format]);
    return this;
  }

}

const FormatterFactory = () => {
  return new Formatter();
}

module.exports = FormatterFactory;
