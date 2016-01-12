xquery version "1.0-ml";

import module namespace sem = "http://marklogic.com/semantics" at "/MarkLogic/semantics.xqy";
import module namespace test="http://marklogic.com/roxy/test-helper" at "/test/test-helper.xqy";

xdmp:document-insert(
  '/recipes/13406012670869338867.json',
  xdmp:unquote(
  '{
    "name": "Steve''s Scottish 80/-",
    "source": "http://beersmith.com/Recipes2/recipe_332.htm",
    "description": "<p><span style=\"color: #003572; font-size: medium;\">This is my favourite beer [This week]. The flavour profile is smooth and malty with a roasty bite and a very smooth hop character. The 1728 Scottish yeast imparts a very subtle smoked character. An Edinburgh water profile will suit this beer style.</span></p>\n<p><span style=\"color: #003572; font-size: medium;\">Simple single infusion mash for use with most modern well modified grains (about 95% of the time).</span></p>",
    "style": "14",
    "subtype": "C",
    "originalGravity": "1.052",
    "boilTime": 60,
    "maltAdditions": [
      {
        "pounds": 9.92,
        "remainingMinutes": 60,
        "triple": {
          "subject": "urn:uuid:e0a49a0f-dae0-435e-a167-9e9b52d3a6e2",
          "predicate": "http://davidcassel.net/beer/malt#addition",
          "object": "http://davidcassel.net/beer/malt#pale-ale"
        }
      },
      {
        "pounds": 1.1,
        "remainingMinutes": 60,
        "triple": {
          "subject": "urn:uuid:e0a49a0f-dae0-435e-a167-9e9b52d3a6e2",
          "predicate": "http://davidcassel.net/beer/malt#addition",
          "object": "http://davidcassel.net/beer/malt#munich-20"
        }
      },
      {
        "pounds": 0.22,
        "remainingMinutes": 60,
        "triple": {
          "subject": "urn:uuid:e0a49a0f-dae0-435e-a167-9e9b52d3a6e2",
          "predicate": "http://davidcassel.net/beer/malt#addition",
          "object": "http://davidcassel.net/beer/malt#crystal-40"
        }
      },
      {
        "pounds": 0.07,
        "remainingMinutes": 60,
        "triple": {
          "subject": "urn:uuid:e0a49a0f-dae0-435e-a167-9e9b52d3a6e2",
          "predicate": "http://davidcassel.net/beer/malt#addition",
          "object": "http://davidcassel.net/beer/malt#chocolate"
        }
      }
    ],
    "hopAdditions": [
      {
        "aau": 3.55,
        "remainingMinutes": 60,
        "triple": {
          "subject": "urn:uuid:e0a49a0f-dae0-435e-a167-9e9b52d3a6e2",
          "predicate": "http://davidcassel.net/beer/hops#addition",
          "object": "http://davidcassel.net/beer/hops#goldings-uk"
        }
      },
      {
        "aau": 4.4,
        "remainingMinutes": 15,
        "triple": {
          "subject": "urn:uuid:e0a49a0f-dae0-435e-a167-9e9b52d3a6e2",
          "predicate": "http://davidcassel.net/beer/hops#addition",
          "object": "http://davidcassel.net/beer/hops#goldings-uk"
        }
      },
      {
        "aau": 3.55,
        "remainingMinutes": 5,
        "triple": {
          "subject": "urn:uuid:e0a49a0f-dae0-435e-a167-9e9b52d3a6e2",
          "predicate": "http://davidcassel.net/beer/hops#addition",
          "object": "http://davidcassel.net/beer/hops#goldings-uk"
        }
      },
      {
        "aau": 2.65,
        "remainingMinutes": 0,
        "triple": {
          "subject": "urn:uuid:e0a49a0f-dae0-435e-a167-9e9b52d3a6e2",
          "predicate": "http://davidcassel.net/beer/hops#addition",
          "object": "http://davidcassel.net/beer/hops#goldings-uk"
        }
      }
    ],
    "yeast": "Wyeast 1728",
    "classification": {
      "triple": {
        "subject": "urn:uuid:e0a49a0f-dae0-435e-a167-9e9b52d3a6e2",
        "predicate": "http://www.w3.org/2000/01/rdf-schema#type",
        "object": "http://davidcassel.net/bjcp/guidelines/2015#ScottishExport"
      }
    }
  }'),
  xdmp:default-permissions(),
  ('data', 'recipes')
),

sem:rdf-load("/Users/dcassel/git/mlbeer/src/test/suites/recipe-transform/test-data/bjcp.n3"),
sem:rdf-load("/Users/dcassel/git/mlbeer/src/test/suites/recipe-transform/test-data/malt.n3")
