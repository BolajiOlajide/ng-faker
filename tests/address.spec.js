if (typeof module !== 'undefined') {
    var ngfaker = require('../index');
    var fixtures = require('./fixtures');
    var address = fixtures.address;
}

describe('Address:', function () {

    describe('State', function () {
        test('it should return a random state if no region is passed', function () {
            var state = ngfaker.address.state();
            expect(address.state.all.indexOf(state)).toBeGreaterThanOrEqual(0);
        });

        test('it returns a state from the south west', function () {
            var sw = ngfaker.address.state('sw');
            expect(address.state.sw.indexOf(sw)).toBeGreaterThanOrEqual(0);
        });

        test('it returns a state from the south east', function () {
            var se = ngfaker.address.state('se');
            expect(address.state.se.indexOf(se)).toBeGreaterThanOrEqual(0);
        });

        test('it returns a state from the south south', function () {
            var ss = ngfaker.address.state('ss');
            expect(address.state.ss.indexOf(ss)).toBeGreaterThanOrEqual(0);
        });

        test('it returns a state from the north west', function () {
            var nw = ngfaker.address.state('nw');
            expect(address.state.nw.indexOf(nw)).toBeGreaterThanOrEqual(0);
        });

        test('it returns a state from the north east', function () {
            var ne = ngfaker.address.state('ne');
            expect(address.state.ne.indexOf(ne)).toBeGreaterThanOrEqual(0);
        });

        test('it returns a state from the north central', function () {
            var nc = ngfaker.address.state('nc');
            expect(address.state.nc.indexOf(nc)).toBeGreaterThanOrEqual(0);
        });

        test('it returns a state from all if an invalid region is passed', function () {
            var state = ngfaker.address.state('xkdk');
            expect(address.state.all.indexOf(state)).toBeGreaterThanOrEqual(0);
        });
    });
});
