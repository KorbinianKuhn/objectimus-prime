const formatter = require('../index');
const should = require('should');
const moment = require('moment');

describe('date()', () => {
  it('test format date of object', () => {
    const date = new Date();
    const result = formatter().date('YYYY-MM-DD', 'date').data({
      date: new Date()
    });
    result.should.deepEqual({
      date: moment(date).format('YYYY-MM-DD')
    });
  });

  it('test format date of array of objects', () => {
    const date = new Date();
    const result = formatter().date('YYYY-MM-DD', 'date').data([{
      date: new Date()
    }]);
    result.should.deepEqual([{
      date: moment(date).format('YYYY-MM-DD')
    }]);
  });
});
