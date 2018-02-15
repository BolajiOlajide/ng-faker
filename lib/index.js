/**
 * Base class for NGFaker
 *
 * @namespace ngFaker
 */
function ngFaker() {
    var Fake = require('./fake');
    this.fake = new Fake(this).fake;
}

// export the base class
module.exports = ngFaker;
