/**
 * namespace ngFaker.internet
 */
function Internet(ngFaker) {
  /**
   * email
   *
   * @method ngFaker.internet.email
   * @param {string} firstName
   * @param {string} lastName
   * @param {string} provider
   */
  this.email = function (firstName, lastName, provider) {
    provider = provider || ngFaker.random.arrayElement(ngFaker.definitions.internet.free_email);
    return ngFaker.helpers.slugify(ngFaker.internet.userName(firstName, lastName, true)) + '@' + provider;
  };

  /**
   * userName
   *
   * @method faker.internet.userName
   * @param {string} firstName
   * @param {string} lastName
   */
  this.userName = function (firstName, lastName) {
    var result;
    firstName = firstName || ngFaker.name.firstName();
    lastName = lastName || ngFaker.name.lastName();
    /* eslint default-case:0 */
    /* eslint indent:0 */
    switch (ngFaker.random.number(2)) {
      case 0:
        result = firstName + ngFaker.random.arrayElement(ngFaker.definitions.internet.email_suffix);
        break;
      case 1:
        result = firstName + ngFaker.random.arrayElement(['.', '_', '-']) + lastName;
        break;
      case 2:
        result = firstName + ngFaker.random.arrayElement(['.', '_', '-']) + lastName + ngFaker.random.number(99);
    }
    result = result.toString().replace(/'/g, '');
    result = result.replace(/ /g, '');
    return result;
  };
}

module.exports = Internet;
