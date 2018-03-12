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

    describe('Local Government', function () {
        test('it should return a random local government if no state is passed', function () {
            var localGovernment = ngfaker.address.localGovernment();
            expect(address.local_government.all.indexOf(localGovernment)).toBeGreaterThanOrEqual(0);
            expect(typeof localGovernment).toEqual('string');
        });

        test('it should return a random local government from a state', function () {
            var localGovernment = ngfaker.address.localGovernment('akwa_ibom');
            expect(address.local_government.akwa_ibom.indexOf(localGovernment)).toBeGreaterThanOrEqual(0);

            var localGovernment = ngfaker.address.localGovernment('kogi');
            expect(address.local_government.kogi.indexOf(localGovernment)).toBeGreaterThanOrEqual(0);

            var localGovernment = ngfaker.address.localGovernment('imo');
            expect(address.local_government.imo.indexOf(localGovernment)).toBeGreaterThanOrEqual(0);

            var localGovernment = ngfaker.address.localGovernment('sokoto');
            expect(address.local_government.sokoto.indexOf(localGovernment)).toBeGreaterThanOrEqual(0);

            var localGovernment = ngfaker.address.localGovernment('oyo');
            expect(address.local_government.oyo.indexOf(localGovernment)).toBeGreaterThanOrEqual(0);
        });

        test('it should return a random local government if an invalid state is passed', function () {
            var localGovernment = ngfaker.address.localGovernment('kgkgk');
            expect(address.local_government.all.indexOf(localGovernment)).toBeGreaterThanOrEqual(0);
            expect(typeof localGovernment).toEqual('string');
        });

        test('it should return a local government for a state with spaces', function () {
            var localGovernment = ngfaker.address.localGovernment('akwa ibom');
            expect(address.local_government.akwa_ibom.indexOf(localGovernment)).toBeGreaterThanOrEqual(0);

            var localGovernment = ngfaker.address.localGovernment('cross river');
            expect(address.local_government.cross_river.indexOf(localGovernment)).toBeGreaterThanOrEqual(0);

            var localGovernment = ngfaker.address.localGovernment('federal capital territory');
            expect(address.local_government.federal_capital_territory.indexOf(localGovernment)).toBeGreaterThanOrEqual(0);
        });

        test('it should return a local government if the state has capital letters', function () {
            var localGovernment = ngfaker.address.localGovernment('Akwa Ibom');
            expect(address.local_government.akwa_ibom.indexOf(localGovernment)).toBeGreaterThanOrEqual(0);

            var localGovernment = ngfaker.address.localGovernment('Cross River');
            expect(address.local_government.cross_river.indexOf(localGovernment)).toBeGreaterThanOrEqual(0);
        });

        test('it should return a local government if the state has capital letters and underscores', function () {
            var localGovernment = ngfaker.address.localGovernment('Akwa_Ibom');
            expect(address.local_government.akwa_ibom.indexOf(localGovernment)).toBeGreaterThanOrEqual(0);

            var localGovernment = ngfaker.address.localGovernment('Cross_River');
            expect(address.local_government.cross_river.indexOf(localGovernment)).toBeGreaterThanOrEqual(0);
        });

        test('it contains correct (current)  total number of local governments', function () {
            expect(address.local_government.all.length).toEqual(774);
        });
    });

    describe('Local Governments', function () {
        test('it should return the correct number of local goverments for a state', function () {
            var localGovernments = ngfaker.address.localGovernments('akwa_ibom');
            expect(localGovernments.length).toEqual(31);
            expect(localGovernments.indexOf('Abak')).toBeGreaterThanOrEqual(0);
            expect(localGovernments.indexOf('Okobo')).toBeGreaterThanOrEqual(0);
            expect(localGovernments.indexOf('Obot Akara')).toBeGreaterThanOrEqual(0);

            var localGovernments = ngfaker.address.localGovernments('lagos');
            expect(localGovernments.length).toEqual(20);
            expect(localGovernments.indexOf('Agege')).toBeGreaterThanOrEqual(0);
            expect(localGovernments.indexOf('Oshodi - Isolo')).toBeGreaterThanOrEqual(0);
            expect(localGovernments.indexOf('Ikeja')).toBeGreaterThanOrEqual(0);

            var localGovernments = ngfaker.address.localGovernments('kano');
            expect(localGovernments.length).toEqual(44);
            expect(localGovernments.indexOf('Dala')).toBeGreaterThanOrEqual(0);
            expect(localGovernments.indexOf('Kano Municipal')).toBeGreaterThanOrEqual(0);
            expect(localGovernments.indexOf('Dawakin Kudu')).toBeGreaterThanOrEqual(0);
        });

        test('it should return a random array of local governments if no state is passed', function () {
            var localGovernments = ngfaker.address.localGovernments();
            expect(Array.isArray(localGovernments)).toBeTruthy();
            expect(localGovernments.length).toBeGreaterThan(0);
        });

        test('it should return a random array of local governments if an invalid state is passed', function () {
            var localGovernments = ngfaker.address.localGovernments('lclc');
            expect(Array.isArray(localGovernments)).toBeTruthy();
            expect(localGovernments.length).toBeGreaterThan(0);
        });

        test('it should return local governments if the state has spaces', function () {
            var localGovernments = ngfaker.address.localGovernments('akwa ibom');
            expect(localGovernments.length).toEqual(31);
            expect(localGovernments.indexOf('Abak')).toBeGreaterThanOrEqual(0);
            expect(localGovernments.indexOf('Okobo')).toBeGreaterThanOrEqual(0);
            expect(localGovernments.indexOf('Obot Akara')).toBeGreaterThanOrEqual(0);
        });

        test('it should return local governments if the state has capital letters', function () {
            var localGovernments = ngfaker.address.localGovernments('Akwa Ibom');
            expect(localGovernments.length).toEqual(31);
            expect(localGovernments.indexOf('Abak')).toBeGreaterThanOrEqual(0);
            expect(localGovernments.indexOf('Okobo')).toBeGreaterThanOrEqual(0);
            expect(localGovernments.indexOf('Obot Akara')).toBeGreaterThanOrEqual(0);
        });
    });
});
