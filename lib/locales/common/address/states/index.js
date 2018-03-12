var states = {};

module.exports = states;

states.sw = require('./south-west');
states.ss = require('./south-south');
states.se = require('./south-east');
states.nc = require('./north-central');
states.ne = require('./north-east');
states.nw = require('./north-west');

var allStates = [].concat(states.sw, states.ss, states.se, states.nc, states.ne, states.nw);

states.all = allStates;

