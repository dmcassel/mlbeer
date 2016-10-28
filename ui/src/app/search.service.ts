import { Injectable } from '@angular/core';
import { SearchResult } from './search-result';

@Injectable()
export class SearchService {

  latestResponse;

  getResults() {
    return this.latestResponse.results;
  }

  getFacets() {
    return this.latestResponse.facets;
  }

  getPageSize() {
    return this.latestResponse['page-length'];
  }

  getCurrentPage() {
    return 1;
  }

  getTotal() {
    return this.latestResponse.total;
  }

  constructor() {
    this.latestResponse =
      {
        "snippet-format":"snippet",
        "total":13,
        "start":1,
        "page-length":10,
        "selected":"include",
        "results":[
          new SearchResult({"index":1, "uri":"/recipes/13449291639587007555.json", "path":"fn:doc(\"/recipes/13449291639587007555.json\")", "score":0, "confidence":0, "fitness":0, "href":"/v1/documents?uri=%2Frecipes%2F13449291639587007555.json", "mimetype":"application/json", "format":"json", "matches":[{"path":"fn:doc(\"/recipes/13449291639587007555.json\")/object-node()", "match-text":["Odell 90 Shilling clone http://www.homebrewdenver.com/2013/03/clone-brew-odell-90-shilling/ <p style=\"border: 0px; margin: 0px 0px 5px; padding:..."]}], "extracted":{"kind":"array", "content":[{"name":"Odell 90 Shilling clone"}]}}),
          new SearchResult({"index":2, "uri":"/recipes/6602526511350001825.json", "path":"fn:doc(\"/recipes/6602526511350001825.json\")", "score":0, "confidence":0, "fitness":0, "href":"/v1/documents?uri=%2Frecipes%2F6602526511350001825.json", "mimetype":"application/json", "format":"json", "matches":[{"path":"fn:doc(\"/recipes/6602526511350001825.json\")/object-node()", "match-text":["My Oh Maibock! (BIAB) https://www.brewtoad.com/recipes/my-oh-maibock-biab <p><span style=\"color: #5a5758; font-family: proxima-nova, sans-serif;..."]}], "extracted":{"kind":"array", "content":[{"name":"My Oh Maibock! (BIAB)"}]}}),
          new SearchResult({"index":3, "uri":"/recipes/14209749539312687878.json", "path":"fn:doc(\"/recipes/14209749539312687878.json\")", "score":0, "confidence":0, "fitness":0, "href":"/v1/documents?uri=%2Frecipes%2F14209749539312687878.json", "mimetype":"application/json", "format":"json", "matches":[{"path":"fn:doc(\"/recipes/14209749539312687878.json\")/object-node()", "match-text":["1868 East India Pale Ale https://byo.com/stories/issue/item/3345-1868-east-india-pale-ale <h5 style=\"font-size: 1em; margin: 0.3em 0px; color:..."]}], "extracted":{"kind":"array", "content":[{"name":"1868 East India Pale Ale"}]}}),
          new SearchResult({"index":4, "uri":"/recipes/13406012670869338867.json", "path":"fn:doc(\"/recipes/13406012670869338867.json\")", "score":0, "confidence":0, "fitness":0, "href":"/v1/documents?uri=%2Frecipes%2F13406012670869338867.json", "mimetype":"application/json", "format":"json", "matches":[{"path":"fn:doc(\"/recipes/13406012670869338867.json\")/object-node()", "match-text":["Steve's Scottish 80/- http://beersmith.com/Recipes2/recipe_332.htm <p><span style=\"color: #003572; font-size: medium;\">This is my favourite beer..."]}], "extracted":{"kind":"array", "content":[{"name":"Steve's Scottish 80/-"}]}}),
          new SearchResult({"index":5, "uri":"/recipes/11683829475870556969.json", "path":"fn:doc(\"/recipes/11683829475870556969.json\")", "score":0, "confidence":0, "fitness":0, "href":"/v1/documents?uri=%2Frecipes%2F11683829475870556969.json", "mimetype":"application/json", "format":"json", "matches":[{"path":"fn:doc(\"/recipes/11683829475870556969.json\")/object-node()", "match-text":["Midnight Sun Brewing Full Curl Scotch Ale http://byo.com/hops/item/2325-midnight-sun-brewing-full-curl-scotch-ale-clone <p><em style=\"color:..."]}], "extracted":{"kind":"array", "content":[{"name":"Midnight Sun Brewing Full Curl Scotch Ale"}]}}),
          new SearchResult({"index":6, "uri":"/recipes/17166780967471033731.json", "path":"fn:doc(\"/recipes/17166780967471033731.json\")", "score":0, "confidence":0, "fitness":0, "href":"/v1/documents?uri=%2Frecipes%2F17166780967471033731.json", "mimetype":"application/json", "format":"json", "matches":[{"path":"fn:doc(\"/recipes/17166780967471033731.json\")/object-node()", "match-text":["Steelhead Wee Heavy Scotch Ale http://byo.com/cider/item/1412-steelhead-brewing-wee-heavy-scotch-ale-clone <p><em style=\"color: #444444;..."]}], "extracted":{"kind":"array", "content":[{"name":"Steelhead Wee Heavy Scotch Ale"}]}}),
          new SearchResult({"index":7, "uri":"/recipes/17114146112649629601.json", "path":"fn:doc(\"/recipes/17114146112649629601.json\")", "score":0, "confidence":0, "fitness":0, "href":"/v1/documents?uri=%2Frecipes%2F17114146112649629601.json", "mimetype":"application/json", "format":"json", "matches":[{"path":"fn:doc(\"/recipes/17114146112649629601.json\")/object-node()", "match-text":["NB Maibock https://www.northernbrewer.com/documentation/allgrain/AG-Maibock.pdf <p>This bock substyle is brewed late in the year and lagered all..."]}], "extracted":{"kind":"array", "content":[{"name":"NB Maibock"}]}}),
          new SearchResult({"index":8, "uri":"/recipes/16868150460374064818.json", "path":"fn:doc(\"/recipes/16868150460374064818.json\")", "score":0, "confidence":0, "fitness":0, "href":"/v1/documents?uri=%2Frecipes%2F16868150460374064818.json", "mimetype":"application/json", "format":"json", "matches":[{"path":"fn:doc(\"/recipes/16868150460374064818.json\")/object-node()", "match-text":["Stone Pale Ale clone http://byo.com/stories/issue/item/3124-stone-pale-ale-clone <p style=\"margin-bottom: 1em; font-size: 13px; line-height: 19px;..."]}], "extracted":{"kind":"array", "content":[{"name":"Stone Pale Ale clone"}]}}),
          new SearchResult({"index":9, "uri":"/recipes/17378910612685849644.json", "path":"fn:doc(\"/recipes/17378910612685849644.json\")", "score":0, "confidence":0, "fitness":0, "href":"/v1/documents?uri=%2Frecipes%2F17378910612685849644.json", "mimetype":"application/json", "format":"json", "matches":[{"path":"fn:doc(\"/recipes/17378910612685849644.json\")/object-node()", "match-text":["Clermont Scottish Ale https://byo.com/cider/item/1756-clermont-scottish-ale <p style=\"margin-bottom: 1em; font-size: 13px; line-height: 19px;..."]}], "extracted":{"kind":"array", "content":[{"name":"Clermont Scottish Ale"}]}}),
          new SearchResult({"index":10, "uri":"/recipes/6781286814266098647.json", "path":"fn:doc(\"/recipes/6781286814266098647.json\")", "score":0, "confidence":0, "fitness":0, "href":"/v1/documents?uri=%2Frecipes%2F6781286814266098647.json", "mimetype":"application/json", "format":"json", "matches":[{"path":"fn:doc(\"/recipes/6781286814266098647.json\")/object-node()", "match-text":["Dead Guy Clone http://www.brewersfriend.com/homebrew/recipe/view/28776/dead-guy-clone 4 C 1.050 90 Pale Ale..."]}], "extracted":{"kind":"array", "content":[{"name":"Dead Guy Clone"}]}})
        ],
        "facets": [
          {
            "name": "Collection",
            "type":"collection",
            "facetValues":[
              {"name":"data", "count":13, "value":"data"},
              {"name":"recipe", "count":13, "value":"recipe"}
            ]
          },
          {
            "name": "style",
            "type":"xs:int",
            "facetValues":[
              {"name":"4", "count":4, "value":4},
              {"name":"14", "count":4, "value":14},
              {"name":"17", "count":2, "value":17},
              {"name":"11", "count":1, "value":11},
              {"name":"12", "count":1, "value":12},
              {"name":"18", "count":1, "value":18}
            ]
          },
          {
            "name": "subtype",
            "type":"xs:string",
            "facetValues":[
              {"name":"A", "count":1, "value":"A"},
              {"name":"B", "count":1, "value":"B"},
              {"name":"C", "count":11, "value":"C"}
            ]
          }
        ],
        "query":{"and-query":[]},
        "qtext":null,
        "metrics":{
          "query-resolution-time":"PT0.00448S",
          "facet-resolution-time":"PT0.067303S",
          "snippet-resolution-time":"PT0.005497S",
          "extract-resolution-time":"PT0.037926S",
          "total-time":"PT0.800617S"
        }
      };
  }
}
