const higherOrderFn = (cb) => {
  const data = {
    name: 'Alice'
  };

  console.log('2 - before the timeout');

  setTimeout(() => {
    data.name = 'Bob';
    cb(data);
  }, 1000);

  console.log('3 - after the timeout');
};

console.log('1 - before the main call');
higherOrderFn((bob) => {
  console.log('5 - bob inside the callback', bob);
});
console.log('4 - after the main call');

// for (let i = 0; i < 10000; i++) {
//   console.log(new Date());
// }
