var NgFaker = require('./lib');

// create new instance of faker class
var ngfaker = new NgFaker({ locales: require('./lib/locales') });

console.log(ngfaker.name.firstName(1), '++++');

module.exports = ngfaker;
