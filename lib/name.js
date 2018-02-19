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

  this.firstName = function (gender, ethnicity) {
    ethnicity = ethnicity || 'en';

    if (typeof gender !== 'number') {
      gender = ngFaker.random.number(1);
    }

    if (gender === 0) {
      return ngFaker.random.arrayElement(ngFaker.datasets.names[ethnicity].male);
    }
    return ngFaker.random.arrayElement(ngFaker.datasets.names[ethnicity].female);
  };

  /**
   * lastName
   *
   * @method lastName
   * @param {string} ethnicity: what ethnicity the name should come from, defaults to english
   * @memberof faker.name
   */
  this.lastName = function (ethnicity) {
    ethnicity = ethnicity || 'en';

    if (ngFaker.datasets.names[ethnicity]) {
      return ngFaker.random.arrayElement(ngFaker.datasets.names[ethnicity].lastNames);
    }
    // default to english - en if the ethnicity is not found
    return ngFaker.random.arrayElement(ngFaker.datasets.names.en.lastNames);
  };
}

module.exports = Name;
