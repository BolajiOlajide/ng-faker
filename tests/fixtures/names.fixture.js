const male_first_names = require('../../lib/locales/english/names/male_first_names');
const female_first_names = require('../../lib/locales/english/names/female_first_names');
const last_names = require('../../lib/locales/english/names/last_names');

const all_first_names = [].concat(male_first_names, female_first_names);

module.exports = {
  male_first_names,
  female_first_names,
  last_names,
  all_first_names
};
