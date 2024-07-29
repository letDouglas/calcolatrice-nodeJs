/**
 * Converts a number to a string.
 *
 * @param {number} numero - The number to convert.
 * @returns {string} The number as a string.
 */
export const numberToString = (numero) => {
    return numero.toString();
  };
  
  /**
   * Converts a number to a formatted string with two decimal places.
   *
   * @param {number} numero - The number to convert.
   * @returns {string} The number formatted to two decimal places as a string.
   */
  export const numberToFloat = (numero) => {
    return numero.toFixed(2);
  };
  