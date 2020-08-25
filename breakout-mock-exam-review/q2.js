/* Question 2
 *
 *  Implement the functions defined below
 *
 */

// Meant to be used by median. Do not alter.
const round = function(number) {
  return Math.round(number * 100) / 100;
};

/* ===========================================================================
 * MEDIAN - the middle number of a list (when sorted)
 *        - if the list length is even, then the median is the average of the two middle values
 *        - use the provided 'round' function before returning your value
 *
 * For example:
 *
 *    median([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    4
 */
// [6, 2, 3, 4, 9, 6, 1, 6] // 8 elements
//  0, 1, 2, 3, 4, 5, 6, 7
// 8/2 === 4
// Math.floor(3.5) // 3

const median = function(arr) {
  arr.sort();

  if (arr.length % 2 === 0) {
    // even
    const firstIndex = arr.length / 2;
    const secondIndex = firstIndex - 1;

    const firstNum = arr[firstIndex];
    const secondNum = arr[secondIndex];
    const average = (firstNum + secondNum) / 2;

    return round(average);
  } else {
    // odd
    const middleIndex = Math.floor(arr.length / 2);
    return arr[middleIndex];
  }
};

// Don't change below:
module.exports = { median };
