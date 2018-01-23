const _ = require('lodash');

const copy = (data, key, target) => {
  if (_.isArray(data)) {
    copyArray(data, key, target);
  } else {
    copyObject(data, key, target);
  }
}
const copyArray = (data, key, target) => {
  data.map(o => {
    copyObject(o, key, target);
  });
}
const copyObject = (data, key, target) => {
  _.set(data, target, _.get(data, key));
}

module.exports = copy;