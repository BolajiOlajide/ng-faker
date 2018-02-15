/**
 * A fake class for fake stuff  generations
 * @constructor
 */
function Fake() {
    /**
     * Return a fake string
     * @return {string} a fake string
     */
    this.fake = function fake() {
        return 'fake string';
    };
}

module.exports = Fake;
