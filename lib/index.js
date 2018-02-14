function ngFaker() {
  var self = this;
  var Fake = require('./fake');

  self.fake = new Fake(self).fake;
}

module.exports = ngFaker;
