var names = { yo: {}, en: {} };
module.exports = names;

names.yo.allNames = require('./yoruba');
names.en.allNames = require('./english');
