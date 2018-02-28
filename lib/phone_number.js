var phone = require('./locales/common/phone');

/**
 * namespace ngFaker.phone
 */
function Phone(ngFaker) {
  /**
   * returns a random phone number
   *
   * @method phoneNumber
   * @returns {string} random phone number
   * @param {{intl: boolean}} options the options for generating a phone number.
   * If it is true, we add an international prefix to the number.
   *
   */
  this.phoneNumber = function (options) {
    var phoneNumber;

    if (options && options.intl) {
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
