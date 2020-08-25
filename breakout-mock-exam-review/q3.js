/* Question 3
 *
 *  Implement the 'mode' function defined below
 *
 * MODE - the most frequently occurring number
 *      - for this test, the provided lists will only have a single value for the mode
 *
 * For example:
 *
 *    mode([6,2,3,4,9,6,1,0,5,6,5]);
 *
 * Returns:
 *
 *    6
 */
const mode = function(arr) {
  // an object to store values
  const tally = {};

  // iterate through the array
  for (const num of arr) {
    // have we seen this number before?
    if (tally[num]) {
      // if we have, increment the counter for that number
      tally[num] = tally[num] + 1;
      // tally[num] += 1;
    } else {
      // if we haven't, we need to start with an initial value of 1
      tally[num] = 1;
    }
  }

  // console.log(tally);
  let highest = -Infinity;
  let result = null;

  // iterate through tally
  for (const num in tally) {
    // compare the value at each key against a stored value
    if (tally[num] > highest) {
      // if it's greater, replace stored value with value at key
      highest = tally[num];
      result = num;
    }
  }

  return result;
};

// Don't change below:
module.exports = { mode };
