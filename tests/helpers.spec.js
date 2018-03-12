if (typeof module !== 'undefined') {
    var ngfaker = require('../index');
}

describe('Helpers', function () {

    describe('StatesWithUnderscores', function () {
        it('should return an array states with underscores', function () {
            var statesWithUnderscores = ngfaker.helpers.statesWithUnderscores();

            expect(Array.isArray(statesWithUnderscores)).toBeTruthy();

            expect(statesWithUnderscores.indexOf('akwa_ibom')).toBeGreaterThanOrEqual(0);
            expect(statesWithUnderscores.indexOf('cross_river')).toBeGreaterThanOrEqual(0);
            expect(statesWithUnderscores.indexOf('federal_capital_territory')).toBeGreaterThanOrEqual(0);
        });
    });

    describe('Format State', function () {
        it('should properly format the state argument', function () {
            var formattedState = ngfaker.helpers.formatState('akwa ibom');
            expect(formattedState).toEqual('akwa_ibom');

            var formattedState = ngfaker.helpers.formatState('Cross River');
            expect(formattedState).toEqual('cross_river');
        });
    });
});
