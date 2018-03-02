if (typeof module !== 'undefined') {
  var ngfaker = require('../index');
  var fixtures = require('./fixtures');
}

describe('Name: ', function () {
  describe('First Name', function () {
    test('it should return a random firstname', function () {
      // array containing all the first names both male and female
      var all_first_names = fixtures.all_first_names;
      var firstName = ngfaker.name.firstName();
      expect(all_first_names.indexOf(firstName)).toBeGreaterThanOrEqual(0);
    });

    test('it should return a gender specific firstname (male)', function () {
      // array containing male first names
      var male_first_names = fixtures.male_first_names;
      var firstName = ngfaker.name.firstName(0);
      expect(male_first_names.indexOf(firstName)).toBeGreaterThanOrEqual(0);
    });

    test('it should return a gender specific firstname (female)', function () {
      // array containing female first names
      var female_first_names = fixtures.female_first_names;
      var firstName = ngfaker.name.firstName(1);
      expect(female_first_names.indexOf(firstName)).toBeGreaterThanOrEqual(0);
    });
  });

  describe('Last Name', function () {
    test('it should return a lastname', function () {
      // array containing all the last names
      var last_names = fixtures.last_names;
      var lastName = ngfaker.name.lastName();
      expect(last_names.indexOf(lastName)).toBeGreaterThanOrEqual(0);
    });
  });

  describe('Prefix', function () {
    test('it should return a prefix', function () {
      // array containing all the last names
      var prefixes = fixtures.prefixes;
      var prefix = ngfaker.name.prefix();
      expect(prefixes.indexOf(prefix)).toBeGreaterThanOrEqual(0);
    });
  });

  describe('Full name', function () {
    test('it should return a random full name', function () {
      var fullName = ngfaker.name.fullName();
      var nameParts = fullName.split(' ');
      expect(nameParts.length).toEqual(3);
    });
  });
});
