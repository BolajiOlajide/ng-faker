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

    describe('States', function () {
        test('it should return all states if no argument is passed', function () {
            var states = ngfaker.address.states();
            expect(states.length).toBeGreaterThanOrEqual(37);
            expect(typeof states).toEqual('object');
        });

        test('it should return all states in a region if passed as a parameter', function () {
            var states = ngfaker.address.states('sw');
            expect(states.indexOf('Ekiti')).toBeGreaterThanOrEqual(0);
            expect(states.indexOf('Oyo')).toBeGreaterThanOrEqual(0);
            expect(typeof states).toEqual('object');
        });

        test('it should return all states in a region if passed as a parameter', function () {
            var states = ngfaker.address.states('ne');
            expect(states.indexOf('Adamawa')).toBeGreaterThanOrEqual(0);
            expect(states.indexOf('Yobe')).toBeGreaterThanOrEqual(0);
            expect(typeof states).toEqual('object');
        });

        test('it should return all states in a region if passed as a parameter', function () {
            var states = ngfaker.address.states('nc');
            expect(states.indexOf('Benue')).toBeGreaterThanOrEqual(0);
            expect(states.indexOf('Niger')).toBeGreaterThanOrEqual(0);
            expect(typeof states).toEqual('object');
        });

        test('it should return all states in a region if passed as a parameter', function () {
            var states = ngfaker.address.states('se');
            expect(states.indexOf('Abia')).toBeGreaterThanOrEqual(0);
            expect(states.indexOf('Ebonyi')).toBeGreaterThanOrEqual(0);
            expect(typeof states).toEqual('object');
        });

        test('it should return all states in a region if passed as a parameter', function () {
            var states = ngfaker.address.states('nw');
            console.log('nw ======>', states);
            expect(states.indexOf('Kaduna')).toBeGreaterThanOrEqual(0);
            expect(states.indexOf('Zamfara')).toBeGreaterThanOrEqual(0);
            expect(typeof states).toEqual('object');
        });

        test('it should return all states in a region if passed as a parameter', function () {
            var states = ngfaker.address.states('ss');
            expect(states.indexOf('Akwa Ibom')).toBeGreaterThanOrEqual(0);
            expect(states.indexOf('Bayelsa')).toBeGreaterThanOrEqual(0);
            expect(typeof states).toEqual('object');
        });

        test('it should return all states if an invalid region is passed', function () {
            var states = ngfaker.address.states('sc');
            expect(typeof states).toEqual('object');
            expect(states.length).toBeGreaterThanOrEqual(37);
        });
    });
});
