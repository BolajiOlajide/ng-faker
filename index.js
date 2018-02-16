var NgFaker = require('./lib');

// create new instance of faker class
var ngfaker = new NgFaker({ locales: require('./lib/locales') });

console.log(ngfaker.random.alphanumeric(6));

module.exports = ngfaker;
