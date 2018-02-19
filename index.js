var NgFaker = require('./lib');

// create new instance of faker class
var ngfaker = new NgFaker({ datasets: require('./lib/data') });

module.exports = ngfaker;
