const _ = require('lodash');

const filter = (data, keys) => {
  if (_.isArray(data)) {
    return filterArray(data, keys);
  } else {
    return filterObject(data, keys);
  }
}
exports.filter = filter;

const valueFilter = (data, path, keys) => {
  _.set(data, path, filter(_.get(data, path), keys));
}
exports.valueFilter = valueFilter;

const filterArray = (data, keys) => {
  const filtered = [];
  data.map(o => {
    filtered.push(filterObject(o, keys));
  });
  return filtered;
}
const filterObject = (data, keys) => {
  const filtered = {};
  keys.map(key => {
    _.set(filtered, key, _.get(data, key));
  });
  return filtered;
}
