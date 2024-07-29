/**
 * Compares two numbers and returns:
 * - 1 if a is greater than b
 * - 0 if a is equal to b
 * - -1 if a is less than b
 *
 * @param {number} a - The first number to compare
 * @param {number} b - The second number to compare
 * @returns {number} 1, 0, or -1 based on the comparison
 */
export function compare(a, b) {
  if (a > b) {
    return 1;
  } else if (a === b) {
    return 0;
  } else {
    return -1;
  }
}
