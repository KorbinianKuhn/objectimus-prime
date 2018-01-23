const formatter = require('../index');
const should = require('should');

describe('rename()', () => {
  it('test rename keys of object', () => {
    const result = formatter().sign('positive', 'negative', 'zero').data({
      positive: 3,
      negative: -2,
      zero: 0
    });
    result.should.deepEqual({
      positive: '+3',
      negative: '-2',
      zero: '0'
    });
  });

  it('test rename keys of array of objects', () => {
    const result = formatter().sign('positive', 'negative', 'zero').data([{
      positive: 3,
      negative: -2,
      zero: 0
    }]);
    result.should.deepEqual([{
      positive: '+3',
      negative: '-2',
      zero: '0'
    }]);
  });
});