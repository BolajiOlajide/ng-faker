if (typeof module !== 'undefined') {
  var ngfaker = require('../index');
  var fixtures = require('./fixtures');
  var lorem = fixtures.lorem;
}

describe('Lorem: ', function() {
  describe('Words', function() {
    test('it should return a random word', function() {
      var word = ngfaker.lorem.word();
      expect(lorem.words.indexOf(word)).toBeGreaterThanOrEqual(0);
    });
  });

  describe('Phrases', function() {
    test('it should return a random phrase', function() {
      var phrase = ngfaker.lorem.phrase();
      expect(lorem.phrases.indexOf(phrase)).toBeGreaterThanOrEqual(0);
    });
  });
});
