const Counter = require('./classes');
const counterFn = require('./functions');

console.log('----------- classes ----------');
const counter = new Counter();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();

console.log('----------- functions ----------');
counterFn();
counterFn();
counterFn();
counterFn();
counterFn();
counterFn();
