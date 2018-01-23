const formatter = require('../index');
const should = require('should');

describe('floor()', () => {
  it('floor keys from object', () => {
    const result = formatter().floor(1, 'number').data({
      number: 2.45
    });
    result.number.should.equal(2.4);
  });

  it('floor keys from array of objects', () => {
    const result = formatter().floor(1, 'number').data([{
      number: 2.45
    }]);
    result.should.deepEqual([{
      number: 2.4
    }]);
  });
});