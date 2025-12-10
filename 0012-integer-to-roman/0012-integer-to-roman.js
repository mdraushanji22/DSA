/**
 * Convert an integer to a Roman numeral.
 * Supports values from 1 to 3999 (standard Roman numeral range).
 *
 * @param {number} num - integer to convert
 * @returns {string} Roman numeral representation
 * @throws {TypeError} if num is not a finite number
 * @throws {RangeError} if num is out of 1..3999
 */
function intToRoman(num) {
  if (typeof num !== 'number' || !Number.isFinite(num) || !Number.isInteger(num)) {
    throw new TypeError('Input must be an integer.');
  }
  if (num < 1 || num > 3999) {
    throw new RangeError('Input must be between 1 and 3999 (inclusive).');
  }

  const values =    [1000, 900, 500, 400, 100,  90,  50,  40,  10,   9,   5,   4,   1];
  const symbols =   ['M',  'CM','D', 'CD', 'C', 'XC','L', 'XL','X', 'IX', 'V', 'IV','I'];

  let result = '';
  let i = 0;

  while (num > 0) {
    const count = Math.floor(num / values[i]);
    if (count > 0) {
      result += symbols[i].repeat(count);
      num -= values[i] * count;
    }
    i++;
  }

  return result;
}
