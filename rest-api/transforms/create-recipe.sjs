
// Find the IRIs that represent the BJCP type and subtype
function lookupType(type, subtype) {
  var iterator = sem.sparql(
    'PREFIX bjcp: <http://davidcassel.net/bjcp/guidelines/2015#>' +
    'PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>' +

    'select ?type ?subtype ' +
    'where ' +
    '{' +
    '  ?type bjcp:type 5 .' +
    '  ?subtype rdfs:subClassOf ?type .' +
    '  ?subtype bjcp:sub-type "D"' +
    '}',
    {
      "bjcpType": type,
      "bjcpSubtype": subtype
    }
  );
  var values = iterator.next().value;
  return {
    type: values.type,
    subtype: values.subtype
  };
}


function createRecipe(context, params, content) {
  var mutable = content.toObject();

  var recipeIRI = sem.uuid();

  var types = lookupType(parseInt(mutable.style, 10), mutable.subtype)

  mutable.classification = {
    "triple": {
      "subject": recipeIRI,
      "predicate": "http://www.w3.org/2000/01/rdf-schema#type",
      "object": types.subtype
    }
  };

  mutable.maltAdditions.forEach(function(malt) {
    malt.triple = {
      "subject": recipeIRI,
      "predicate": "http://davidcassel.net/beer/malt#addition",
      "object": malt.iri
    };
    delete malt.iri;
  });

  mutable.hopAdditions.forEach(function(hop) {
    hop.triple = {
      "subject": recipeIRI,
      "predicate": "http://davidcassel.net/beer/hops#addition",
      "object": hop.iri
    };
    delete hop.iri;
  });

  return mutable;
}

exports.transform = createRecipe;
