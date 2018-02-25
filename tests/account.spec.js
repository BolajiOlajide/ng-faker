if (typeof module !== 'undefined') {
  var ngfaker = require('../index');
  var fixtures = require('./fixtures');
  var account = fixtures.account;
}

describe('Account: ', function() {
  describe('Banks', function() {
    test('it should return a random bank', function() {
      var bank = ngfaker.account.bank();
      expect(account.banks.indexOf(bank)).toBeGreaterThanOrEqual(0);
    });
  });

  describe('Account Number', function() {
    test('it should return a account number', function() {
      var accountNumber = ngfaker.account.accountNumber();
      expect(accountNumber.length).toEqual(10);
    });
  });
});
