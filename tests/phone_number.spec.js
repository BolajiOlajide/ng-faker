if (typeof module !== 'undefined') {
    var ngfaker = require('../index');
    var fixtures = require('./fixtures');
    var phone = fixtures.phone;
}

describe('Phone:', function () {

    describe('Number:', function () {
        test('it returns a random phone number', function () {
            var phoneNumber = ngfaker.phone.phoneNumber();
            expect(phoneNumber.length).toEqual(11);
            expect(typeof phoneNumber).toBe('string');
        });

        test('it returns a phone number with international prefix', function () {
            var phoneNumber = ngfaker.phone.phoneNumber({ intl: true });
            expect(phoneNumber.length).toEqual(14);
            expect(phoneNumber.includes('+234')).toBe(true);
            expect(typeof phoneNumber).toBe('string');
        });
    });

    describe('Service Providers', function () {
        test('it should return a random service provider', function () {
            var serviceProvider = ngfaker.phone.serviceProvider();
            expect(phone.service_providers.indexOf(serviceProvider)).toBeGreaterThanOrEqual(0);
            expect(typeof serviceProvider).toBe('string');
        });
    });
});
