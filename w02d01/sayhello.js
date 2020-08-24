const sayHello = (name) => {
  if (!name) {
    return 'please provide correct arguments';
  }

  if (typeof name !== 'string') {
    return null;
  }

  return `hello there ${name}`;
};

const ANSWER_TO_EVERYTHING = 42;

// module.exports = sayHello;

// module.exports = {
//   sayHello,
//   ANSWER_TO_EVERYTHING
// };

module.exports.sayHello = sayHello;
module.exports.ANSWER_TO_EVERYTHING = ANSWER_TO_EVERYTHING;

// console.log(module);
