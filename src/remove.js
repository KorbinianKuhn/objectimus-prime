const _ = require('lodash');

const remove = (data, keys) => {
  if (_.isArray(data)) {
    removeArray(data, keys);
  } else {
    removeObject(data, keys);
  }
}
exports.remove = remove;

const removeArray = (data, keys) => {
  data.map(o => {
    removeObject(o, keys);
  });
}
const removeObject = (data, keys) => {
  keys.map(key => {
    _.unset(data, key);
  });
}

const valueRemove = (data, path, keys) => {
  remove(_.get(data, path), keys);
}
exports.valueRemove = valueRemove;

const deepRemove = (data, keys) => {
  if (_.isArray(data)) {
    deepRemoveArray(data, keys);
  } else {
    deepRemoveObject(data, keys);
  }
}
exports.deepRemove = deepRemove;

const deepRemoveArray = (data, keys) => {
  data.map(o => {
    deepRemoveObject(o, keys);
  });
}

const deepRemoveObject = (data, keys) => {
  for (const key in data) {
    if (_.includes(keys, key)) {
      _.unset(data, key);
    } else {
      const item = _.get(data, key);
      if (_.isObject(item)) {
        deepRemove(item, keys);
      }
    }
  }
}
