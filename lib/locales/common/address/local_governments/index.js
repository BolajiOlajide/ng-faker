var localGovernments = {};

module.exports = localGovernments;

localGovernments.abia = require('./abia');
localGovernments.adamawa = require('./adamawa');
localGovernments.akwa_ibom = require('./akwa_ibom');
localGovernments.anambra = require('./anambra');
localGovernments.bauchi = require('./bauchi');
localGovernments.bayelsa = require('./bayelsa');
localGovernments.benue = require('./benue');
localGovernments.borno = require('./borno');
localGovernments.cross_river = require('./cross_river');
localGovernments.delta = require('./delta');
localGovernments.ebonyi = require('./ebonyi');
localGovernments.edo = require('./edo');
localGovernments.ekiti = require('./ekiti');
localGovernments.enugu = require('./enugu');
localGovernments.federal_capital_territory = require('./fct');
localGovernments.gombe = require('./gombe');
localGovernments.imo = require('./imo');
localGovernments.jigawa = require('./jigawa');
localGovernments.kaduna = require('./kaduna');
localGovernments.kano = require('./kano');
localGovernments.katsina = require('./katsina');
localGovernments.kebbi = require('./kebbi');
localGovernments.kogi = require('./kogi');
localGovernments.kwara = require('./kwara');
localGovernments.lagos = require('./lagos');
localGovernments.nasarawa = require('./nasarawa');
localGovernments.niger = require('./niger');
localGovernments.ogun = require('./ogun');
localGovernments.ondo = require('./ondo');
localGovernments.osun = require('./osun');
localGovernments.oyo = require('./oyo');
localGovernments.plateau = require('./plateau');
localGovernments.rivers = require('./rivers');
localGovernments.sokoto = require('./sokoto');
localGovernments.taraba = require('./taraba');
localGovernments.yobe = require('./yobe');
localGovernments.zamfara = require('./zamfara');

// For testing purposes I need an array that contains all local governments
var allLocalGoverments = Object.keys(localGovernments).reduce(function (acc, element) {
  return acc.concat(localGovernments[element]);
}, []);

localGovernments.all = allLocalGoverments;
