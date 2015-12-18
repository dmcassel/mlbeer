/* jshint node:true */

var ml = require('marklogic');
var db = null;

function setOptions(options) {
  'use strict';

  db = ml.createDatabaseClient(
    {
      host: options.mlHost,
      port: options.mlHttpPort,
      user: options.defaultUser,
      password: options.defaultPass,
      authType: 'DIGEST'     // The default auth
    });
}

function loadMalts() {
  'use strict';

  var query =
    'PREFIX malt: <http://davidcassel.net/bjcp/guidelines/2015#>' +
    'PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>' +

    'select ?malt ?label ' +
    'where {' +
    '  ?malt rdfs:subClassOf malt:Malt ;' +
    '        rdfs:label ?label' +
    '}';

  var malts = new Promise(
    function(resolve, reject) {
      db.graphs.sparql('application/sparql-results+json', query).result()
        .then(function(triples) {
          var malts = {};
          triples.results.bindings.forEach(function(malt) {
            malts[malt.malt.value] = malt.label.value;
          });
          resolve(malts);
        })
        .catch(function(error){
          reject(error);
        });
    });

  return malts;
}

function loadStyles() {
  'use strict';

  var query =
    'PREFIX bjcp: <http://davidcassel.net/bjcp/guidelines/2015#>' +
    'PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>' +

    'select ?typeValue ?typeLabel ?subtypeValue ?subtypeLabel ' +
    'where {' +
    '  ?type bjcp:type ?typeValue ;' +
    '        rdfs:label ?typeLabel .' +
    '  ?subtype rdfs:subClassOf ?type ;' +
    '           bjcp:sub-type ?subtypeValue ;' +
    '           rdfs:label ?subtypeLabel .' +
    '}';

  var styles = new Promise(
    function(resolve, reject) {
      db.graphs.sparql('application/sparql-results+json', query).result()
        .then(function(triples) {
          var beerTypes = [];
          triples.results.bindings.forEach(function(item) {
            var type;
            if (beerTypes[item.typeValue.value]) {
              type = beerTypes[item.typeValue.value];
            } else {
              type = {
                value: item.typeValue.value,
                label: item.typeLabel.value,
                subtypes: []
              };
              beerTypes[type.value] = type;
            }
            type.subtypes.push({
              value: item.subtypeValue.value,
              label: item.subtypeLabel.value
            });
          });
          resolve(beerTypes);
        })
        .catch(function(error) {
          console.log('error! ' + error);
          reject(error);
        });
    }
  );

  return styles;
}

module.exports = {
  setOptions: setOptions,
  loadStyles: loadStyles,
  loadMalts: loadMalts
};
