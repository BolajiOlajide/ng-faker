/**
 * namespace ngFaker.name
 */

function Name(ngFaker) {
  /**
   * firstName
   *
   * @method firstName
   * @param {mixed} gender: 0 - male, 1 - female
   * @param {string} ethnicity: what ethnicity the name should come from, defaults to english
   * @memberof faker.name
   */

  this.firstName = function (gender) {
    if (typeof gender !== 'number') {
      gender = ngFaker.random.number(1);
    }

    if (gender === 0) {
      return ngFaker.random.arrayElement(ngFaker.locales[ngFaker.locale].name.male_first_name);
    }
    return ngFaker.random.arrayElement(ngFaker.locales[ngFaker.locale].female_first_name);
  };

  /**
   * lastName
   *
   * @method lastName
   * @param {string} ethnicity: what ethnicity the name should come from, defaults to english
   * @memberof faker.name
   */
  this.lastName = function () {
    return ngFaker.random.arrayElement(ngFaker.locales[ngFaker.locale].name.last_name);
  };
}

module.exports = Name;
