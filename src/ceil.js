const _ = require('lodash');

const ceil = (data, keys, precision) => {
  if (_.isArray(data)) {
    ceilArray(data, keys, precision);
  } else {
    ceilObject(data, keys, precision);
  }
}

const ceilArray = (data, keys, precision) => {
  data.map(o => {
    ceilObject(o, keys, precision);
  });
}

const ceilObject = (data, keys, precision) => {
  keys.map(key => {
    _.update(data, key, (v) => {
      return _.ceil(v, precision);
    })
  });
}


module.exports = ceil;