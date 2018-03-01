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

    var Fake = require('./fake');
    this.fake = new Fake(self).fake;

    var Helpers = require('./helpers');
    this.helpers = new Helpers(self);

    var Name = require('./name');
    self.name = bindAll(new Name(self));

    // add the random method and bind it to the base
    var Random = require('./random');
    self.random = bindAll(new Random(self));

    var Lorem = require('./lorem');
    self.lorem = bindAll(new Lorem(self));

    var Address = require('./address');
    self.address = bindAll(new Address(self));

    var Account = require('./account');
    self.account = bindAll(new Account(self));

    var Phone = require('./phone_number');
    self.phone = bindAll(new Phone(self));

    var _definitions = {
        'name': ['male_first_name', 'last_name', 'female_first_name'],
        'address': ['state', 'local_government']
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
                     * first condition ensure we default to locale fallback
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

// export the base class
module.exports = NgFaker;
