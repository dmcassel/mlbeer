
var test = require('/test/test-helper.xqy');

var createRecipe = require('/marklogic.rest.transform/create-recipe/assets/transform.sjs').transform;

var builder = new NodeBuilder();
builder.startDocument();
builder.addNode(
  {
    "name":"Classic English Pale Ale",
    "source":"https://byo.com/stories/issue/item/3071-classic-english-pale-ale",
    "description":null,
    "style":"11",
    "subtype":"C",
    "originalGravity":"1.053",
    "boilTime":60,
    "maltAdditions": [
      {
        "iri":"http://davidcassel.net/beer/malt#maris-otter",
        "pounds":10.25,
        "remainingMinutes":60
      },
      {
        "iri":"http://davidcassel.net/beer/malt#crystal-40",
        "pounds":0.33,
        "remainingMinutes":60
      }
    ],
    "hopAdditions": [
      {
        "iri":"http://davidcassel.net/beer/hops#goldings-uk",
        "aau":10,
        "remainingMinutes":60
      },
      {
        "iri":"http://davidcassel.net/beer/hops#goldings-uk",
        "aau":5,
        "remainingMinutes":10
      }
    ],
    "yeast":"Wyeast 1028"
  }
);
builder.endDocument();
var content = builder.toNode();

var actual = createRecipe(null, null, content);

test.assertEqual(2, actual.maltAdditions.length);
test.assertEqual(10.25, actual.maltAdditions[0].pounds);
test.assertEqual(60, actual.maltAdditions[0].remainingMinutes);
test.assertEqual('http://davidcassel.net/beer/malt#addition', actual.maltAdditions[0].triple.predicate);
test.assertEqual('http://davidcassel.net/beer/malt#maris-otter', actual.maltAdditions[0].triple.object);

test.assertEqual(2, actual.hopAdditions.length);
test.assertEqual(10, actual.hopAdditions[0].aau);
test.assertEqual(60, actual.hopAdditions[0].remainingMinutes);
test.assertEqual('http://davidcassel.net/beer/hops#addition', actual.hopAdditions[0].triple.predicate);
test.assertEqual('http://davidcassel.net/beer/hops#goldings-uk', actual.hopAdditions[0].triple.object);

test.assertExists(actual.classification);
test.assertEqual('http://www.w3.org/2000/01/rdf-schema#type', actual.classification.triple.predicate);
test.assertEqual('http://davidcassel.net/bjcp/guidelines/2015#StrongBitter', actual.classification.triple.object);
