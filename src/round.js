const _ = require('lodash');

const round = (data, keys, precision) => {
  if (_.isArray(data)) {
    roundArray(data, keys, precision);
  } else {
    roundObject(data, keys, precision);
  }
}

const roundArray = (data, keys, precision) => {
  data.map(o => {
    roundObject(o, keys, precision);
  });
}

const roundObject = (data, keys, precision) => {
  keys.map(key => {
    _.update(data, key, (v) => {
      if (_.isArray(v)) {
        return v.map(v2 => {
          return _.round(v2, precision);
        })
      } else {
        return _.round(v, precision);
      }
    })
  });
}


module.exports = round;