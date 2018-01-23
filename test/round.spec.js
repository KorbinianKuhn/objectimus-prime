const formatter = require('../index');
const should = require('should');

describe('round()', () => {
  it('round keys from object', () => {
    const result = formatter().round(1, 'number').data({
      number: 2.45
    });
    result.number.should.equal(2.5);
  });

  it('round keys from array of objects', () => {
    const result = formatter().round(1, 'number').data([{
      number: 2.45
    }]);
    result.should.deepEqual([{
      number: 2.5
    }]);
  });

  it('round elements of array', () => {
    const result = formatter().round(1, 'numbers').data({
      numbers: [2.45, 1.33, 1.77, 4]
    });
    result.should.deepEqual({
      numbers: [2.5, 1.3, 1.8, 4]
    });
  });
});