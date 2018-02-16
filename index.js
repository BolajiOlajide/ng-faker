var NgFaker = require('./lib');

// create new instance of faker class
var ngfaker = new NgFaker({ locales: require('./lib/locales') });

module.exports = ngfaker;
