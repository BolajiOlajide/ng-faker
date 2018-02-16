/**
 * Base class for NGFaker
 *
 * @namespace ngFaker
 */
function ngFaker(options) {
    var self = this;

    // assign options
    var locales = self.locales || options.locales || {};
    var locale = self.locale || options.locale || 'en';

    self.locales = locales;
    self.locale = locale;

    var Fake = require('./fake');
    this.fake = new Fake(this).fake;
}

// export the base class
module.exports = ngFaker;
