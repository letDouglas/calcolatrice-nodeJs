// operazioni.js
import { areValidNumbers } from "./validateNumbers.js";

/**
 * Adds two numbers.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The sum of a and b.
 * @throws {Error} Throws an error if a or b are not valid numbers.
 */
export const add = (a, b) => {
  // Validate inputs
  areValidNumbers(a, b);
  return a + b;
};

/**
 * Subtracts the second number from the first.
 *
 * @param {number} a - The number to subtract from.
 * @param {number} b - The number to subtract.
 * @returns {number} The difference between a and b.
 * @throws {Error} Throws an error if a or b are not valid numbers.
 */
export const subtract = (a, b) => {
  // Validate inputs
  areValidNumbers(a, b);
  return a - b;
};

/**
 * Multiplies two numbers.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The product of a and b.
 * @throws {Error} Throws an error if a or b are not valid numbers.
 */
export const multiply = (a, b) => {
  //FIXME: nelle specifiche iniziali doveva avere più di due argomenti.
  // Validate inputs
  areValidNumbers(a, b);
  return a * b;
};

/**
 * Divides the first number by the second.
 *
 * @param {number} a - The dividend.
 * @param {number} b - The divisor.
 * @returns {number} The quotient of a divided by b.
 * @throws {Error} Throws an error if dividing by zero or if a or b are not valid numbers.
 */
export const divide = (a, b) => {
  // Validate inputs
  areValidNumbers(a, b);

  // Check for division by zero
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return a / b;
};

/**
 * Calculates the power of a number.
 *
 * @param {number} base - The base number.
 * @param {number} exponent - The exponent.
 * @returns {number} The result of base raised to the power of exponent.
 * @throws {Error} Throws an error if base or exponent are not valid numbers.
 * @throws {Error} Throws an error if base is zero and exponent is negative.
 */
export const power = (base, exponent) => {
  // Validate inputs
  areValidNumbers(base, exponent);

  // Check for invalid base and exponent combination
  if (base === 0 && exponent < 0) {
    throw new Error(
      "Math Error: Zero base cannot be raised to a negative exponent."
    );
  }
  return Math.pow(base, exponent);
};

/**
 * Logs a message to the console.
 *
 * @param {string} message - The message to log.
 */
export const printResult = (message) => {
  console.log(message);
};
