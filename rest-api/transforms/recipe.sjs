// Denormalize some triples

// For each addition, instead of sending the triple that connects this recipe
// to the IRI of an ingredient, send the ingredient's IRI and label.
function transformAdditions(predicate, recipeIRI, additions) {
  var triples = sem.sparql(
    'PREFIX dcbeer: <http://davidcassel.net/beer#>\n' +
    'PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n' +
    'select ?ingredient ?label ' +
    'where {'+
    '  ?recipeIRI ?predicate ?ingredient .'+
    '  ?ingredient rdfs:label ?label'+
    '}',
    {
      'predicate': predicate,
      'recipeIRI': recipeIRI
    }
  );
  labels = {};
  for (var triple of triples) {
    labels[triple.malt] = triple.label;
  }

  var ingredients = [];
  for (var prop in additions) {
    if (additions.hasOwnProperty(prop)) {
      var mutable = additions[prop].toObject();
      mutable.label = labels[additions[prop].triple.object];
      mutable.iri = mutable.triple.object;
      delete mutable.triple;
      triple.push(mutable);
    }
  }

  return ingredients;
}

function recipe(context, params, content) {
  // content is the document that has been read.
  // Turn it into a JS object
  var mutableDoc = content.toObject();

  var recipeIRI = sem.iri(content.root.classification.triple.subject);

  mutableDoc.maltAdditions = transformAdditions(
    sem.iri('http://davidcassel.net/beer/malt#addition'),
    recipeIRI,
    content.root.maltAdditions);

  mutableDoc.hopAdditions = transformAdditions(
    sem.iri('http://davidcassel.net/beer/hops#addition'),
    recipeIRI,
    content.root.hopAdditions);

  var typeInfo = sem.sparql(
    'PREFIX bjcp: <http://davidcassel.net/bjcp/guidelines/2015#>\n' +
    'PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n' +
    'select ?type ?typeLabel ?subtype ?subtypeLabel \n' +
    'where {\n' +
    '  ?typeIRI rdfs:label ?typeLabel ;\n' +
    '           bjcp:type ?type .\n' +
    '  ?subtypeIRI rdfs:subClassOf ?typeIRI ;\n' +
    '              bjcp:sub-type ?subtype ;\n' +
    '              rdfs:label ?subtypeLabel .\n' +
    '}',
    { 'subtypeIRI': sem.iri(content.root.classification.triple.object) }
  );
  var types = typeInfo.next().value;
  mutableDoc.style = xs.string(types.type);
  mutableDoc.subtype = types.subtype;
  mutableDoc.typeLabel = types.typeLabel;
  mutableDoc.subtypeLabel = types.subtypeLabel;

  // Return the revised data
  return mutableDoc;
}

exports.transform = recipe;
