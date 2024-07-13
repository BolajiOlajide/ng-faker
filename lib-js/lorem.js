/**
 * namespace ngFaker.lorem
 */
function Lorem(ngFaker) {
  /**
   * returns a word based on the locale set
   *
   * @method word
   * @memberof NgFaker.lorem
   */
  this.word = function () {
    return ngFaker.random.arrayElement(ngFaker.locales[ngFaker.locale].lorem.words);
  };

  /**
   * returns a phrase based on the locale set
   *
   * @method phrase
   * @memberof NgFaker.lorem
   */
  this.phrase = function () {
    return ngFaker.random.arrayElement(ngFaker.locales[ngFaker.locale].lorem.phrases);
  };
}

module.exports = Lorem;
