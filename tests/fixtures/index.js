var male_first_names = require('../../lib/locales/english/names/male_first_names');
var female_first_names = require('../../lib/locales/english/names/female_first_names');
var last_names = require('../../lib/locales/english/names/last_names');
var prefixes = require('../../lib/locales/english/names/prefix');

var all_first_names = [].concat(male_first_names, female_first_names);
var lorem = require('../../lib/locales/english/lorem');

var address = require('../../lib/locales/common/address');

var account = require('../../lib/locales/common/account');

var phone = require('../../lib/locales/common/phone');

module.exports = {
  male_first_names,
  female_first_names,
  last_names,
  all_first_names,
  prefixes,
  lorem,
  address,
  account,
  phone
};
