/**
 * namespace ngFaker.helpers
 */
var Helpers = function (ngFaker) {
  var self = this;

  /**
   * returns an array of states where spaces have
   * been replaced with underscores i.e.
   * akwa ibom => akwa_ibom
   * @method ngFaker.helpers.statesWithUnderscores
   */
  self.statesWithUnderscores = function () {
    var statesWithUnderscores = ngFaker.address.states().map(function (el) {
      return el.toLowerCase().replace(/\s/g, '_');
    });

    return statesWithUnderscores;
  };

  /**
   * properly formats and preprocesses the state argument
   * @method ngFaker.helpers.formatState
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

  /**
   * slugifies string
   *
   * @method ngFaker.helpers.slugify
   * @param {string} string
   */
  self.slugify = function (string) {
    string = string || '';
    return string.replace(/ /g, '-').replace(/[^\w.-]+/g, '');
  };

  /**
   * pastYear
   *
   * @method ngFaker.helpers.pastYear
   * @param {number} years
   * @param {date} reference date
   *
   */
  self.pastYear = function (years, refDate) {
    /**
     * If we ever decide to generate dates we
     * can move this function into a date class.
     * For now, this can remain as a helper
     */
    var date;
    if (Date.parse(refDate)) {
      date = new Date(Date.parse(refDate));
    } else {
      date = new Date();
    }

    var range = {
      min: 1000,
      max: (years || 1) * 365 * 24 * 3600 * 1000
    };

    var past = date.getTime();
    // some time from now to N years ago, in milliseconds
    past -= ngFaker.random.number(range);
    date.setTime(past);

    return date.getFullYear();
  };
};

module.exports = Helpers;
