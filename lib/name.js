/**
 * namespace ngFaker.name
 */

function Name(ngFaker) {
  /**
   * returns a single random first name based on the locale set
   *
   * @method firstName
   * @param {mixed} gender: 0 - male, 1 - female
   * @param {string} ethnicity: depends on the locale set
   * @memberof faker.name
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
   * @param {string} ethnicity: depends on the locale set
   * @memberof faker.name
   */
  this.lastName = function () {
    return ngFaker.random.arrayElement(ngFaker.locales[ngFaker.locale].name.last_name);
  };
}

module.exports = Name;
