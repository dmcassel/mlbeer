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
      malts.push(mutable);
    }
  }

  mutableDoc.maltAdditions = malts;

  // Return the revised data
  return mutableDoc;
}

exports.transform = recipe;