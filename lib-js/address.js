/**
 * namespace ngFaker.address
 */

function Address(ngFaker) {
  /**
   * returns a state from a region
   *
   * @method state
   * @param {string} region: can be one of
   * 'sw', 'se', 'ss', 'nc', 'ne', 'nw'
   * defaults to 'all' if an invalid region
   * or no region is passed
   */
  this.state = function (region) {
    /**
     * If an invalid argument for region is passed e.g. number or boolean
     * or if a region that does not exist is passed default to all states
     */
    if (typeof region !== 'string' || !Object.keys(ngFaker.definitions.address.state).includes(region)) {
      return ngFaker.random.arrayElement(ngFaker.definitions.address.state.all);
    }
    return ngFaker.random.arrayElement(ngFaker.definitions.address.state[region]);
  };

  /**
   * returns all the states in a region
   *
   * @method states
   * @param {string} region: can be one
   * of 'sw', 'se', 'ss', 'nc', 'ne', 'nw'
   * defaults to 'all' if an invalid region
   * is passed
   */
  this.states = function (region) {
    if (typeof region !== 'string' || !Object.keys(ngFaker.definitions.address.state).includes(region)) {
      return ngFaker.definitions.address.state.all.sort();
    }
    return ngFaker.definitions.address.state[region].sort();
  };

  /**
   * returns a random local government from a state
   *
   * @method localGovernment
   * @param {string} state
   */
  this.localGovernment = function (state) {
    state = ngFaker.helpers.formatState(state);

    return ngFaker.random.arrayElement(ngFaker.definitions.address.local_government[state]);
  };

  /**
   * returns all the local governments from a state
   *
   * @method localGovernments
   * @param {string} state
   */
  this.localGovernments = function (state) {
    state = ngFaker.helpers.formatState(state);

    return ngFaker.definitions.address.local_government[state];
  };
}

module.exports = Address;
