const formatter = require('../index');
const should = require('should');

describe('copy()', () => {
  it('test copy keys of object', () => {
    const result = formatter().copy('old', 'new').data({
      old: 'test'
    });
    result.should.deepEqual({
      old: 'test',
      new: 'test'
    });
  });

  it('test copy keys of array of objects', () => {
    const result = formatter().copy('old', 'new').data([{
      old: 'test'
    }]);
    result.should.deepEqual([{
      old: 'test',
      new: 'test'
    }]);
  });
});