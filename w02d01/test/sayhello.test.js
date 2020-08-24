const assert = require('assert').strict;
const myObj = require('../sayhello');

const sayHello = myObj.sayHello;

describe('sayHello function', () => {

  it('should return "hello there Bob" when given "Bob"', () => {
    const input = 'Bob';
    const actual = sayHello(input);
    const expected = 'hello there Bob';

    assert.equal(actual, expected);
  });

  it('should return "please provide correct arguments" when no arguments are passed', () => {
    const actual = sayHello();
    const expected = 'please provide correct arguments';

    assert.equal(actual, expected);
  });

  it('should return null if argument is not a string and not undefined', () => {
    const input = [];
    const actual = sayHello(input);
    const expected = null;

    assert.equal(actual, expected);
  });

});
