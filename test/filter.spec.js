const formatter = require('../index');
const should = require('should');

describe('filter()', () => {
  it('filter keys from object', () => {
    const result = formatter().filter('keep').data({
      keep: true,
      delete: false
    });
    result.should.deepEqual({
      keep: true
    });
  });

  it('filter keys from array of objects', () => {
    const result = formatter().filter('keep').data([{
      keep: true,
      delete: false
    }]);
    result.should.deepEqual([{
      keep: true
    }]);
  });
});