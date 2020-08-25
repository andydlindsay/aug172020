/* Question 1
 *
 *  Implement the functions defined below
 *
 */

/* ===========================================================================
 * MIN - the lowest value in a list
 *
 * For example:
 *
 *    min([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    0
 */
const min = function(arr) {
  let minimumValue = Infinity;

  // iterate through array
  for (const num of arr) {
    // compare each element against minimumValue
    if (num < minimumValue) {
      // if smaller, replace minimumValue with element
      minimumValue = num;
    }
  }

  return minimumValue;
};


/* ===========================================================================
 * MAX - the highest value in a list
 *
 * For example:
 *
 *    max([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    9
 */
const max = function(arr) {
  let maximumValue = -Infinity;

  for (const num of arr) {
    if (num > maximumValue) {
      maximumValue = num;
    }
  }

  return maximumValue;
};

/* ===========================================================================
 * RANGE - the difference between the highest and lowest values in a list
 *
 * For example:
 *
 *    range([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    9
 */
const range = function(arr) {
  const minimum = min(arr);
  const maximum = max(arr);
  return maximum - minimum;
};

// Don't change below:

module.exports = { min, max, range };
