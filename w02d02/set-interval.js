let counter = 0;

const interval = setInterval(() => {
  counter++;
  console.log('hello!', counter);

  if (counter > 10) {
    clearInterval(interval);
  }
}, 7000);

// console.log(interval);
// clearInterval(interval);
// clearTimeout(interval);

// setTimeout(() => {
//   clearInterval(interval);
// }, 4000);
