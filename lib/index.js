var Fake = require('./fake');
var Helpers = require('./helpers');
var Name = require('./name');
var Random = require('./random');
var Lorem = require('./lorem');
var Address = require('./address');
var Account = require('./account');
var Phone = require('./phone_number');
var Internet = require('./internet');

/**
 * Base class for NGFaker
 *
 * @namespace ngFaker
 */
/* eslint indent:0 */

function NgFaker(options) {
    var self = this;

    self.definitions = {};

    // assign options
    var locales = self.locales || options.locales || {};
    var locale = self.locale || options.locale || 'en';
    var localeFallback = self.localeFallback || options.localeFallback || 'en';

    self.locales = locales;
    self.locale = locale;
    self.localeFallback = localeFallback;

    self.definitions = {};

    // bind methods to this context
    function bindAll(obj) {
        Object.keys(obj).forEach(function (meth) {
            if (typeof obj[meth] === 'function') {
                obj[meth] = obj[meth].bind(obj);
            }
        });
        return obj;
    }

    this.fake = new Fake(self).fake;

    this.helpers = new Helpers(self);

    self.name = bindAll(new Name(self));

    // add the random method and bind it to the base
    self.random = bindAll(new Random(self));

    self.lorem = bindAll(new Lorem(self));

    self.address = bindAll(new Address(self));

    self.account = bindAll(new Account(self));

    self.phone = bindAll(new Phone(self));

    self.internet = bindAll(new Internet(self));

    var _definitions = {
        'name': ['male_first_name', 'last_name', 'female_first_name', 'prefix'],
        'address': ['state', 'local_government'],
        'internet': ['domain_suffix', 'example_email', 'email_suffix', 'free_email']
    };

    Object.keys(_definitions).forEach(function (definition) {
        if (typeof self.definitions[definition] === 'undefined') {
            self.definitions[definition] = {};
        }

        if (typeof _definitions[definition] === 'string') {
            self.definitions[definition] = _definitions[definition];
            return;
        }

        _definitions[definition].forEach(function (property) {
            Object.defineProperty(self.definitions[definition], property, {
                get: function () {
                    /**
                     * first condition ensures we default to locale fallback
                     * if an invalid locale is passed
                     */
                    if (typeof self.locales[self.locale] === 'undefined' ||
                        typeof self.locales[self.locale][definition] === 'undefined' ||
                        typeof self.locales[self.locale][definition][property] === 'undefined') {
                        // certain localization sets contain less data then others.
                        // in the case of a missing definition,
                        // use the default localeFallback to substitute the missing set data
                        // throw new Error('unknown property ' + definition + p)
                        return self.locales[localeFallback][definition][property];
                    }
                    // return localized data
                    return self.locales[self.locale][definition][property];
                }
            });
        });
    });
}

// function for setting locale
NgFaker.prototype.setLocale = function (locale) {
    this.locale = locale;
};

NgFaker.prototype.addLocale = function (locale, data) {
  if (locale && data && locale.constructor.name === 'String' && data.constructor.name === 'Object') {
   if (data.title &&
        (Array.isArray(data.name) || Array.isArray(data.lorem) || Array.isArray(data.address))) {
      this.locale = locale;
      this.locales[locale] = data;
    }
  }
};

// export the base class
module.exports = NgFaker;
