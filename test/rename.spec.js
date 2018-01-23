const formatter = require('../index');
const should = require('should');

describe('rename()', () => {
  it('test rename keys of object', () => {
    const result = formatter().rename('old', 'new').data({
      old: 'test'
    });
    result.should.deepEqual({
      new: 'test'
    });
  });

  it('test rename keys of array of objects', () => {
    const result = formatter().rename('old', 'new').data([{
      old: 'test'
    }]);
    result.should.deepEqual([{
      new: 'test'
    }]);
  });
});