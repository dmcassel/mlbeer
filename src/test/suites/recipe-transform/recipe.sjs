
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

test.assertEqual(3.55, actual.hopAdditions[0].aau);
test.assertEqual(60, actual.hopAdditions[0].remainingMinutes);
test.assertEqual('http://davidcassel.net/beer/hops#goldings-uk', actual.hopAdditions[0].iri);
test.assertEqual('East Kent Goldings (UK)', actual.hopAdditions[0].label);
test.assertNotExists(actual.hopAdditions[0].triple);

test.assertEqual(4.4, actual.hopAdditions[1].aau);
test.assertEqual(15, actual.hopAdditions[1].remainingMinutes);
test.assertEqual('http://davidcassel.net/beer/hops#goldings-uk', actual.hopAdditions[1].iri);
test.assertEqual('East Kent Goldings (UK)', actual.hopAdditions[0].label);
test.assertNotExists(actual.hopAdditions[1].triple);
