var NgFaker = require('./lib');

// create new instance of faker class
var ngfaker = new NgFaker({ locales: require('./lib/locales') });

// export the instance of faker created
module.exports = ngfaker;
