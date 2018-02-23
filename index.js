var NgFaker = require('./lib');

// create new instance of faker class
var ngfaker = new NgFaker({ locales: require('./lib/locales') });

ngfaker.setLocale('ig');

console.log(ngfaker.name.firstName(), '+++++');

// export the instance of faker created
module.exports = ngfaker;
