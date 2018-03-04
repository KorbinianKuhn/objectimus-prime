const _ = require('lodash');
const moment = require('moment');

const date = (data, keys, format) => {
  if (_.isArray(data)) {
    dateArray(data, keys, format);
  } else {
    dateObject(data, keys, format);
  }
}
exports.date = date;

const dateArray = (data, keys, format) => {
  data.map(o => {
    dateObject(o, keys, format);
  });
}
const dateObject = (data, keys, format) => {
  keys.map(key => {
    _.set(data, key, moment(_.get(data, key)).format(format));
  });
}
