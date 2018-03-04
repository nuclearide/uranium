var {Uranium} = require('../dist/index');
var u = new Uranium();

describe('Index', () => {
  test('Should initialize', () => {
    expect(u._initialized).toBe(true);
  });
  
  test('Get Completions should return an empty array', () => {
    expect(u.getCompletions()).toEqual([]);
  });
});