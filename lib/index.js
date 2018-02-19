/**
 * Base class for NGFaker
 *
 * @namespace ngFaker
 */
function ngFaker() {
    var self = this;

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

    var Name = require('./name');
    self.name = bindAll(new Name(self));

    // add the random method and bind it to the base
    var Random = require('./random');
    self.random = bindAll(new Random(self));

    var _definitions = {
        'name': ['first_name']
    };

    Object.keys(_definitions).forEach(function (definition) {
        if (typeof self.definitions[definition] === 'undefined') {
            self.definitions[definition] = {};
        }

        if (typeof _definitions[definition] === 'string') {
            self.definitions[definition] = _definitions[definition];
            return;
        }
    });
}

// export the base class
module.exports = ngFaker;
