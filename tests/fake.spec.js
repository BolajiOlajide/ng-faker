if (typeof module !== 'undefined') {
  var ngfaker = require('../index');
}

describe('Fake: ', function () {
  test('it returns a string when called', function () {
    var fake = ngfaker.fake();
    expect(fake).toBe('fake string');
  });
});
