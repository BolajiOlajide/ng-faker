/**
 * namespace ngFaker.state
 */

function Address(ngFaker) {
  /**
   * @method state
   * @param {string} region: can be one of
   * 'sw', 'se', 'ss', 'nc', 'ne', 'nw'
   * defaults to 'all' if a wrong region or no
   * region is passed
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
}

module.exports = Address;
