// Denormalize some triples

function recipe(context, params, content)
{
  // content is the document that has been read.
  // Turn it into a JS object
  var mutableDoc = content.toObject();

  var maltTriples = sem.sparql(
    'PREFIX dcbeer: <http://davidcassel.net/beer#>\n' +
    'PREFIX malt: <http://davidcassel.net/beer/malt#>\n' +
    'PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n' +
    'select ?malt ?label ' +
    'where {'+
    '  ?recipeIRI malt:addition ?malt .'+
    '  ?malt rdfs:label ?label'+
    '}',
    { "recipeIRI": sem.iri(content.root.classification.triple.subject) }
  );
  maltLabels = {};
  for (var malt of maltTriples) {
    maltLabels[malt.malt] = malt.label;
  }

  var malts = [];
  var additions = content.root.maltAdditions;
  for (var malt in additions) {
    if (additions.hasOwnProperty(malt)) {
      var mutable = additions[malt].toObject();
      mutable.label = maltLabels[additions[malt].triple.object];
      mutable.iri = mutable.triple.object;
      delete mutable.triple;
      malts.push(mutable);
    }
  }

  mutableDoc.maltAdditions = malts;

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
