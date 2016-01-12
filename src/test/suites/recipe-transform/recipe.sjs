
var test = require('/test/test-helper.xqy');

var recipe = require('/marklogic.rest.transform/recipe/assets/transform.sjs').transform;

var content = cts.doc('/recipes/13406012670869338867.json');

test.assertExists(content);

var actual = recipe(null, null, content);

test.assertEqual('Steve\'s Scottish 80/-', actual.name);
test.assertEqual('Scottish Ale', actual.typeLabel);
test.assertEqual('Scottish Export', actual.subtypeLabel);
test.assertEqual(4, actual.maltAdditions.length);
test.assertEqual('Pale Ale', actual.maltAdditions[0].label);
test.assertEqual('http://davidcassel.net/beer/malt#pale-ale', actual.maltAdditions[0].iri);
test.assertNotExists(actual.maltAdditions[0].triple);
test.assertEqual('http://davidcassel.net/beer/malt#munich-20', actual.maltAdditions[1].iri);
test.assertNotExists(actual.maltAdditions[1].triple);
