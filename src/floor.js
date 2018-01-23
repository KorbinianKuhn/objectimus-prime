const _ = require('lodash');

const floor = (data, keys, precision) => {
  if (_.isArray(data)) {
    floorArray(data, keys, precision);
  } else {
    floorObject(data, keys, precision);
  }
}

const floorArray = (data, keys, precision) => {
  data.map(o => {
    floorObject(o, keys, precision);
  });
}

const floorObject = (data, keys, precision) => {
  keys.map(key => {
    _.update(data, key, (v) => {
      return _.floor(v, precision);
    })
  });
}


module.exports = floor;