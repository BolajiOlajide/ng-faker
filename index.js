var NgFaker = require('./lib');

// create new instance of faker class
var ngfaker = new NgFaker();

console.log(ngfaker.name.firstName(), '****');

module.exports = ngfaker;
