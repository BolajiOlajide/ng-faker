if (typeof module !== 'undefined') {
  var ngfaker = require('../index');
  var fixtures = require('../lib/fixtures');
}

describe('Random: ', function () {
  describe('number ', function () {
    test('it should return a number not greater \
      than a max if number is passed as argument', function () {
        var randomNumber = ngfaker.random.number(20);
        expect(randomNumber).toBeLessThanOrEqual(20);
        var randomNumber = ngfaker.random.number(200);
        expect(randomNumber).toBeLessThanOrEqual(200);
      });

    test('it should return a number not greater than a max or less \
       than min if they\'re specified in an object', function () {
        var randomNumber = ngfaker.random.number({ min: 20, max: 100 });
        expect(randomNumber).toBeLessThanOrEqual(100);
        expect(randomNumber).toBeGreaterThanOrEqual(20);
      });

    test('it should return a number withing 0 and 9999 if no argument is passed', function () {
      var randomNumber = ngfaker.random.number();
      expect(randomNumber).toBeLessThanOrEqual(9999);
      expect(randomNumber).toBeGreaterThanOrEqual(0);
    });
  });

  describe('boolean ', function () {
    test('it should return a boolean at all times', function () {
      var randomBoolean = ngfaker.random.boolean();
      expect(typeof randomBoolean).toBe('boolean');
    });
  });

  describe('array element ', function () {
    test('it should return a value in [a,b,c] if no argument is passed', function () {
      var randomArrayElement = ngfaker.random.arrayElement();
      expect(typeof randomArrayElement).toBe('string');
      expect(['a', 'b', 'c'].indexOf(randomArrayElement)).toBeGreaterThanOrEqual(0);
    });

    test('it should return a value in the array passed in if argument is passed', function () {
      var hexChars = fixtures.hexaDecimalChars;
      var randomArrayElement = ngfaker.random.arrayElement(hexChars);
      expect(typeof randomArrayElement).toBe('string');
      expect(hexChars.indexOf(randomArrayElement)).toBeGreaterThanOrEqual(0);
    });
  });

  describe('object element ', function () {
    test('it should return value from a default object if no argument is passed', function () {
      var randomObjectVal = ngfaker.random.objectElement();
      var sampleObject = fixtures.sampleObject;
      expect(typeof randomObjectVal).toBe('string');
      var objectVals = Object.keys(sampleObject).map(function(key) {
        return sampleObject[key];
      });
      expect(objectVals.indexOf(randomObjectVal)).toBeGreaterThanOrEqual(0);
    });

    test('it should return value from a the object if no argument is passed', function () {
      var sampleObject2 = fixtures.sampleObject2;
      var randomObjectVal = ngfaker.random.objectElement(sampleObject2);
      expect(typeof randomObjectVal).toBe('string');
      var objectVals = Object.keys(sampleObject2).map(function(key) {
        return sampleObject2[key];
      });
      expect(objectVals.indexOf(randomObjectVal)).toBeGreaterThanOrEqual(0);
    });
  });

  describe('alphanumeric element ', function () {
    test('it should return an alphanumeric character', function () {
      var randomAlphaChar = ngfaker.random.alphanumeric();
      var alphaChars = fixtures.alphaNumericChars;
      expect(typeof randomAlphaChar).toBe('string');
      expect(randomAlphaChar).toHaveLength(1);
      expect(alphaChars.indexOf(randomAlphaChar)).toBeGreaterThanOrEqual(0);
    });

    test('it should return a certain amount alphanumeric character', function () {
      var randomAlphaChar = ngfaker.random.alphanumeric(20);
      var alphaChars = fixtures.alphaNumericChars;
      expect(typeof randomAlphaChar).toBe('string');
      expect(randomAlphaChar).toHaveLength(20);
    });

    test('it should have it\'s count default to 1 if string is passed', function () {
      var randomAlphaChar = ngfaker.random.alphanumeric('bolaji');
      var alphaChars = fixtures.alphaNumericChars;
      expect(typeof randomAlphaChar).toBe('string');
      expect(randomAlphaChar).toHaveLength(1);
      expect(alphaChars.indexOf(randomAlphaChar)).toBeGreaterThanOrEqual(0);
    });
  });

  describe('hexadecimal element ', function () {
    test('it should return an hexadecimal character', function () {
      var randomHexChar = ngfaker.random.hexadecimal(); // 0x{randomHex}
      var hexChars = fixtures.hexaDecimalChars;
      expect(typeof randomHexChar).toBe('string');
      expect(randomHexChar).toHaveLength(3);
      var randomHexChar = randomHexChar.replace('0x', '');
      expect(hexChars.indexOf(randomHexChar)).toBeGreaterThanOrEqual(0);
    });

    test('it should return a certain amount hexadecimal character', function () {
      var randomHexChar = ngfaker.random.hexadecimal(20);// 0x{randomHex}
      var hexChars = fixtures.hexaDecimalChars;
      expect(typeof randomHexChar).toBe('string');
      expect(randomHexChar).toHaveLength(22);
    });

    test('it should have it\'s count default to 1 if string is passed', function () {
      var randomHexChar = ngfaker.random.hexadecimal('rotimi'); // 0x{randomHex}
      var hexChars = fixtures.hexaDecimalChars;
      expect(typeof randomHexChar).toBe('string');
      expect(randomHexChar).toHaveLength(3);
      var randomHexChar = randomHexChar.replace('0x', '');
      expect(hexChars.indexOf(randomHexChar)).toBeGreaterThanOrEqual(0);
    });
  });
});
