/**
 * namespace ngFaker.name
 */

function Name(ngFaker) {
  /**
   * firstName
   *
   * @method firstName
   * @param {mixed} gender: 0 - male, 1 - female
   * @ethnicity {string} what language the name should be defaults to english
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
}

module.exports = Name;
