/**
 * namespace ngFaker.name
 */

function Name(faker) {
  /**
   * firstName
   *
   * @method firstName
   * @param {mixed} gender
   * @memberof faker.name
   */

  this.firstName = function () {
    return 'a fake first name';
  };
}

module.exports = Name;
