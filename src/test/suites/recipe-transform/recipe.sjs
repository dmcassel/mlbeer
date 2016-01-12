
var test = require('/test/test-helper.xqy');

var recipe = require('/marklogic.rest.transform/recipe/assets/transform.sjs').transform;

var content = cts.doc('/recipes/13406012670869338867.json');

test.assertExists(content);

var actual = recipe(null, null, content);

test.assertEqual('Steve\'s Scottish 80/-', actual.name);
test.assertEqual('Scottish Ale', actual.typeLabel);
test.assertEqual('Scottish Export', actual.subtypeLabel);
