const assert = require('assert').strict;
const myObj = require('./sayhello');

const actual = myObj.sayHello('Alice');
const expected = 'hello there Alice';

assert.equal(actual, expected);

// assert.strictEqual('1', 1);
// assert.equal('1', 1);

// console.log('__dirname', __dirname);
// console.log('__filename', __filename);
