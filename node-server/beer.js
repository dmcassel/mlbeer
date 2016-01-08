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

function createRecipe(recipe) {
  'use strict';

  return db.documents.write({
    documents: [
      {
        directory: '/recipes/',
        extension: 'json',
        contentType: 'application/json',
        content: recipe,
        collections: ['recipe', 'data']
      }
    ],
    transform: 'create-recipe'
  }
  ).result();
}

function getRecipe(recipe) {
  'use strict';

  return db.documents.read(
    {
      uris: [recipe],
      transform: ['recipe']
    }
  ).result();
}

function getIngredientsByLevel(level) {
  'use strict';


}

function loadHops() {
  'use strict';

  var query =
    'PREFIX hops: <http://davidcassel.net/beer/hops#>' +
    'PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>' +

    'select ?hop ?label ' +
    'where {' +
    '  ?hop rdfs:subClassOf hops:Hop ;' +
    '        rdfs:label ?label' +
    '}';

  var hops = new Promise(
    function(resolve, reject) {
      db.graphs.sparql('application/sparql-results+json', query).result()
        .then(function(triples) {
          // Revise structure to look like this:
          // {
          //   '<http://davidcassel.net/beer/hops#cascade-us>': 'Cascade (US)',
          //   '<http://davidcassel.net/beer/malt#chinook>': 'Chinook'
          // }
          var hops = {};
          triples.results.bindings.forEach(function(hop) {
            hops[hop.hop.value] = hop.label.value;
          });
          resolve(hops);
        })
        .catch(function(error){
          reject(error);
        });
    });

  return hops;
}

function loadMalts() {
  'use strict';

  var query =
    'PREFIX malt: <http://davidcassel.net/beer/malt#>' +
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
          // Revise structure to look like this:
          // {
          //   '<http://davidcassel.net/beer/malt#crystal-10>': 'Crystal (10L°)',
          //   '<http://davidcassel.net/beer/malt#crystal-20>': 'Crystal (20L°)'
          // }
          var malts = {};
          triples.results.bindings.forEach(function(malt) {
            // malts[iri] = label
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
  createRecipe: createRecipe,
  getRecipe: getRecipe,
  getIngredientsByLevel: getIngredientsByLevel,
  loadStyles: loadStyles,
  loadMalts: loadMalts,
  loadHops: loadHops
};
