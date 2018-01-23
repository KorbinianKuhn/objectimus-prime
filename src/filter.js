const _ = require('lodash');

const filter = (data, keys) => {
  if (_.isArray(data)) {
    return filterArray(data, keys);
  } else {
    return filterObject(data, keys);
  }
}
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

module.exports = filter;