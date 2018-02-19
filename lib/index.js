/**
 * Base class for NGFaker
 *
 * @namespace ngFaker
 */
function ngFaker(options) {
    var self = this;

    options = options || {};

    var datasets = options.datasets || {};
    self.data = datasets;


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
}

// export the base class
module.exports = ngFaker;
