var phone = require('./locales/common/phone');

/**
 * namespace ngFaker.phoneNumber
 */
function Phone(ngFaker) {
  /**
   * returns a random phone number
   * @todo add flag to add international prefix
   *
   * @method phoneNumber
   * @returns {string} random phone number
   */
  this.phoneNumber = function (options) {
    var phoneNumber;

    if (options && options.addInternationalPrefix) {
      phoneNumber = '+234';
    } else {
      phoneNumber = '0';
    }

    for (var i = 0; i < 10; i++) {
      phoneNumber += ngFaker.random.number({ min: 0, max: 9 });
    }
    return phoneNumber;
  };

  /**
   * returns a random GSM service provider in Nigeria
   *
   * @method serviceProvider
   * @returns {string} random service provider
   */
  this.serviceProvider = function () {
    return ngFaker.random.arrayElement(phone.service_providers);
  };
}

module.exports = Phone;
