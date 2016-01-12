xquery version "1.0-ml";

import module namespace sem = "http://marklogic.com/semantics" at "/MarkLogic/semantics.xqy";
import module namespace test="http://marklogic.com/roxy/test-helper" at "/test/test-helper.xqy";

sem:rdf-load("/Users/dcassel/git/mlbeer/src/test/suites/recipe-transform/test-data/bjcp.n3"),
sem:rdf-load("/Users/dcassel/git/mlbeer/src/test/suites/recipe-transform/test-data/malt.n3")
