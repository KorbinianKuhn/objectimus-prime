const formatter = require('../index');
const should = require('should');

describe('ceil()', () => {
  it('ceil keys from object', () => {
    const result = formatter().ceil(1, 'number').data({
      number: 2.45
    });
    result.number.should.equal(2.5);
  });

  it('ceil keys from array of objects', () => {
    const result = formatter().ceil(1, 'number').data([{
      number: 2.45
    }]);
    result.should.deepEqual([{
      number: 2.5
    }]);
  });
});