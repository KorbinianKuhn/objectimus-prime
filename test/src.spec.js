const formatter = require('../index');
const should = require('should');

describe('formatter()', () => {
  it('test complex schema', () => {
    const data = {
      name: 'Jane Doe',
      hobbies: [{
        _id: '0',
        difficulty: 'easy',
        name: 'biking'
      }, {
        _id: '1',
        difficulty: 'medium',
        name: 'cooking'
      }]
    }
    const expected = {
      name: 'Jane Doe',
      hobbies: [{
        difficulty: 'easy',
        name: 'biking'
      }, {
        difficulty: 'medium',
        name: 'cooking'
      }]
    }
    const actual = formatter().valueRemove('hobbies', '_id').data(data);
    actual.should.deepEqual(expected);
  });
});
