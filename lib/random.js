var fixtures = require('./fixtures');

/**
 * Faker method for generating random stuffs
 *
 * @namespace ngFaker.random
 */
function Random(ngFaker) {
  /**
   * returns a single random number based on a max number or range
   *
   * @method ngFaker.random.number
   * @param {{min: number, max: number}} options the options for randomization
   *
   * @returns {number} a random number
   */
  this.number = function (options) {
    if (typeof options === 'number') {
      options = {
        max: options
      };
    }

    options = options || {};

    if (typeof options.min === 'undefined') {
      options.min = 0;
    }

    if (typeof options.max === 'undefined') {
      options.max = 9999;
    }

    if (options.min > options.max) {
      var temp = options.min;
      options.min = options.max;
      options.max = temp;
    }

    // Make the range inclusive of the max value
    var max = options.max;
    if (max >= 0) {
      max += 1;
    }

    // Calculate the range
    const range = max - min + 1;

    // Generate random number and scale it to the range
    const randomInRange = Math.floor(Math.random() * range);

    // Shift the random number to start from the minimum value
    return randomInRange + min;
  };

  /**
   * returns a random boolean value
   *
   * @method ngFaker.random.boolean
   * @returns {boolean} random boolean
   */
  this.boolean = function () {
    return !!ngFaker.random.number(1);
  };

  /**
   * method for returning a random element in an array
   *
   * @method ngFaker.random.arrayElement
   * @param {array} array
   * @returns {mixed} element contained in the array
   */
  this.arrayElement = function (array) {
    array = array || ['a', 'b', 'c'];
    var randomIndex = ngFaker.random.number({ max: array.length - 1 });
    return array[randomIndex];
  };

  /**
   * method for returning a random value in an object
   *
   * @method ngFaker.random.objectElement
   * @param {object} object
   * @returns {mixed} random value in the object
   */
  this.objectElement = function (object) {
    object = object || { 'lagos': 'ikeja', 'oyo': 'ibadan' };
    var keysList = Object.keys(object);
    var randomKey = ngFaker.random.arrayElement(keysList);

    return object[randomKey];
  };

  /**
   * method for returning random alpha-numeric string
   *
   * @method ngFaker.random.alphanumeric
   * @param {number} count number of alphanumeric characters needed
   * @returns {string} random hexademical character(s)
   */
  this.alphanumeric = function alphanumeric(count) {
    count = count || 1;

    // fallback incase the user's enters a non-numeric value
    if (typeof count !== 'number') {
      count = 1;
    }

    var alphaChar = '';
    for (var i = 0; i < count; i++) {
      alphaChar += ngFaker.random.arrayElement(fixtures.alphaNumericChars);
    }

    return alphaChar;
  };

  /**
   * method for returning random hexadecimal string
   *
   * @method ngFaker.random.hexadecimal
   * @param {number} count number of hexadecimal characters needed
   * @returns {string} random hexadecimal character(s)
   */
  this.hexadecimal = function hexadecimal(count) {
    count = count || 1;

    // fallback incase the user's enters a non-numeric value
    if (typeof count !== 'number') {
      count = 1;
    }

    var randomHex = '';
    for (var i = 0; i < count; i++) {
      randomHex += ngFaker.random.arrayElement(fixtures.hexaDecimalChars);
    }
    return '0x' + randomHex;
  };

  return this;
}

module.exports = Random;
