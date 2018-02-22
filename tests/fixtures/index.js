const male_first_names = require('../../lib/locales/english/names/male_first_names');
const female_first_names = require('../../lib/locales/english/names/female_first_names');
const last_names = require('../../lib/locales/english/names/last_names');
const prefixes = require('../../lib/locales/english/names/prefix');

const all_first_names = [].concat(male_first_names, female_first_names);
const lorem = require('../../lib/locales/english/lorem');

module.exports = {
  male_first_names,
  female_first_names,
  last_names,
  all_first_names,
  prefixes,
  lorem
};
