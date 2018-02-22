/**
 * namespace ngFaker.name
 */

function Name(ngFaker) {
  /**
   * returns a single random first name based on the locale set
   *
   * @method firstName
   * @param {mixed} gender: 0 - male, 1 - female
   * @memberof ngFaker.name
   */

  this.firstName = function (gender) {
    if (typeof gender !== 'number' || gender > 1) {
      gender = ngFaker.random.number(1);
    }

    if (gender === 0) {
      return ngFaker.random.arrayElement(ngFaker.locales[ngFaker.locale].name.male_first_name);
    }
    return ngFaker.random.arrayElement(ngFaker.locales[ngFaker.locale].name.female_first_name);
  };

  /**
   * returns a single random last name based on the locale set
   *
   * @method lastName
   * @memberof ngFaker.name
   */
  this.lastName = function () {
    return ngFaker.random.arrayElement(ngFaker.locales[ngFaker.locale].name.last_name);
  };

  /**
   * returns a name prefix depending on the locale set
   *
   * @method prefix
   * @memberof ngFaker.name
   */
  this.prefix = function () {
    return ngFaker.random.arrayElement(ngFaker.locales[ngFaker.locale].name.prefix);
  };
}

module.exports = Name;
