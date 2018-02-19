/**
 * namespace ngFaker.name
 */

function Name(faker) {
    /**
     * firstName
     *
     * @method firstName
     * @param {mixed} gender: 0 - male, 1 - female
     * @ethnicity {string} what language the name should be defaults to english
     * @memberof faker.name
     */

    this.firstName = function (gender, ethnicity) {
        // 0 is falsy...
        ethnicity = ethnicity || 'en';
        gender = gender || 2;

        console.log(gender);
        var index = Math.floor(Math.random() * 10);
        if (gender === 1) {
            // this needs work to clean up
            return faker.data.datasets.names[ethnicity].allNames.male[index];
        }
        return faker.data.datasets.names[ethnicity].allNames.female[index];
    };
}

module.exports = Name;
