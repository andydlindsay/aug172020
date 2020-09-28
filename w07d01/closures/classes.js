class Counter {
  constructor() {
    this.counter = 0;
  }

  increment() {
    this.counter += 1;
    console.log(this.counter);
  }
}

module.exports = Counter;
