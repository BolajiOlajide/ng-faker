if (typeof module !== 'undefined') {
    var faker = require('../index');
}

describe('Fake: ', function() {
  test('it returns a string when called', function() {
    var fake = faker.fake();
    expect(fake).toBe('fake string');
  });
});
