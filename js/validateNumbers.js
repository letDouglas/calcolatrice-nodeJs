// validateNumbers.js

/**
 * Checks if all inputs are valid numbers.
 *
 * @param {...any} inputs - The inputs to check.
 * @returns {boolean} True if all inputs are valid numbers.
 * @throws {Error} Throws an error if any input is not a valid number.
 */
export const areValidNumbers = (...inputs) => {
    for (let i = 0; i < inputs.length; i++) {
      const input = inputs[i];
      if (typeof input !== "number" || isNaN(input) || !isFinite(input)) {
        throw new Error("Invalid input: Must be a valid number.");
      }
    }
    return true;
  };
  