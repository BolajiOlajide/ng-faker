if (typeof module !== 'undefined') {
  var ngfaker = require('../index');
}

describe('Internet: ', function () {
  describe('Email', function () {
    // I got this from this Stackoverflow thread - https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
    var EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    test('it should generate a valid email', function () {
      var email = ngfaker.internet.email();
      expect(EMAIL_REGEX.test(email)).toBeTruthy();
    });

    test('it should generate a valid email if parameters are passed in', function () {
      var email = ngfaker.internet.email('john', 'doe', 'aol.com');
      expect(EMAIL_REGEX.test(email)).toBeTruthy();
      expect(email.indexOf('john')).toBeGreaterThanOrEqual(0);
      expect(email.indexOf('aol.com')).toBeGreaterThanOrEqual(0);
    });
  });

  describe('Username', function () {
    test('it should generate a username', function () {
      var username = ngfaker.internet.userName();
      expect(typeof username).toEqual('string');
      expect(username.length).toBeGreaterThan(0);
    });
  });
});
