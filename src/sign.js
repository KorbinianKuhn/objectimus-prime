const _ = require('lodash');

const sign = (data, keys, precision) => {
  if (_.isArray(data)) {
    signArray(data, keys, precision);
  } else {
    signObject(data, keys, precision);
  }
}

const signArray = (data, keys, precision) => {
  data.map(o => {
    signObject(o, keys, precision);
  });
}

const signObject = (data, keys, precision) => {
  keys.map(key => {
    _.update(data, key, (v) => {
      return (v <= 0 ? "" : "+") + v;
    })
  });
}

module.exports = sign;