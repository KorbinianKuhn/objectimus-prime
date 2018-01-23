const _ = require('lodash');

const rename = (data, key, target) => {
  if (_.isArray(data)) {
    renameArray(data, key, target);
  } else {
    renameObject(data, key, target);
  }
}
const renameArray = (data, key, target) => {
  data.map(o => {
    renameObject(o, key, target);
  });
}
const renameObject = (data, key, target) => {
  _.set(data, target, _.get(data, key));
  _.unset(data, key);
}

module.exports = rename;