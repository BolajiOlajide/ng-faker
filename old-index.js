var NgFaker = require('./lib-js');

const {
  en,
  yo,
  ig,
  ha
} = require('./lib-js/locales');

// create new instance of faker class
var ngfaker = new NgFaker({
  locales: {
    en
  }
});

ngfaker.addLocale('yo', yo);
ngfaker.addLocale('ig', ig);
ngfaker.addLocale('ha', ha);


// export the instance of faker created
module.exports = ngfaker;
