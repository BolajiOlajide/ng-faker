/**
 * namespace ngFaker.helpers
 */
var Helpers = function (ngFaker) {
  var self = this;

  /**
   * returns an array of states where spaces have
   * been replaced with underscores i.e.
   * akwa ibom => akwa_ibom
   * @method ngFaker.helpers.states_underscores
   */
  self.statesWithUnderscores = function () {
    var statesWithUnderscores = ngFaker.address.states().map(function (el) {
      return el.toLowerCase().replace(/\s/g, '_');
    });

    return statesWithUnderscores;
  };

  /**
   * properly formats and preprocesses the state argument
   * @param {string} state
   */
  self.formatState = function (state) {
    if (state) {
      // replace spaces with underscores - preprocessing
      state = state.toLowerCase().replace(/\s/g, '_');
    }

    // Our array of states does not have underscores.
    // So we call a helper that returns this
    var statesWithUnderscores = ngFaker.helpers.statesWithUnderscores();

    // if the state passed in is undefined or invalid randomly choose a state
    if (typeof state !== 'string' || !statesWithUnderscores.includes(state)) {
      state = ngFaker.random.arrayElement(statesWithUnderscores);
    }

    return state;
  };
};

module.exports = Helpers;
