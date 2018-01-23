const formatter = require('../index');
const should = require('should');

describe('remove()', () => {
  it('remove keys from object', () => {
    const result = formatter().remove('delete').data({
      keep: true,
      delete: false
    });
    result.should.deepEqual({
      keep: true
    });
  });

  it('remove keys from array of objects', () => {
    const result = formatter().remove('delete').data([{
      keep: true,
      delete: false
    }]);
    result.should.deepEqual([{
      keep: true
    }]);
  });

  it('deepRemove keys from object', () => {
    const result = formatter().deepRemove('_id', 'secret').data({
      _id: 0,
      parent: {
        secret: 'my-secret',
        _id: 21,
        child: {
          _id: 14
        },
      },
      keep: 'test'
    });
    result.should.deepEqual({
      parent: {
        child: {}
      },
      keep: 'test'
    });
  });

  it('deepRemove keys from array of objects', () => {
    const result = formatter().deepRemove('_id', 'secret').data([{
      _id: 0,
      parent: {
        secret: 'my-secret',
        _id: 21,
        child: [{
          _id: 14
        }],
      },
      keep: 'test'
    }]);
    result.should.deepEqual([{
      parent: {
        child: [{}]
      },
      keep: 'test'
    }]);
  });
});
