import { Injectable } from '@angular/core';

@Injectable()
export class SearchService {

  latestResponse;

  getResults() {
    return this.latestResponse.results;
  }

  getFacets() {
    return [
      {
        name: 'Type',
        values: [
          {
            label: 'Standard American Beer',
            count: 23
          },
          {
            label: 'International Lager',
            count: 17
          }
        ]
      },
      {
        name: 'Hops',
        values: [
          {
            label: 'Amarillo',
            count: 27
          },
          {
            label: 'Mosaic',
            count: 38
          }
        ]
      }
    ]
  }
  constructor() {
    this.latestResponse =
      {
        "snippet-format":"snippet",
        "total":22,
        "start":1,
        "page-length":10,
        "results":[
          {"index":1, "uri":"/recipes/13449291639587007555.json", "path":"fn:doc(\"/recipes/13449291639587007555.json\")", "score":0, "confidence":0, "fitness":0, "href":"/v1/documents?uri=%2Frecipes%2F13449291639587007555.json", "mimetype":"application/json", "format":"json", "matches":[{"path":"fn:doc(\"/recipes/13449291639587007555.json\")/object-node()", "match-text":["Odell 90 Shilling clone http://www.homebrewdenver.com/2013/03/clone-brew-odell-90-shilling/ <p style=\"border: 0px; margin: 0px 0px 5px; padding: 5px 0px; font-size: 12px; color: #666666;..."]}]},
          {"index":2, "uri":"/triplestore/b7e22c98c9044542-0-1.xml", "path":"fn:doc(\"/triplestore/b7e22c98c9044542-0-1.xml\")", "score":0, "confidence":0, "fitness":0, "href":"/v1/documents?uri=%2Ftriplestore%2Fb7e22c98c9044542-0-1.xml", "mimetype":"application/xml", "format":"xml", "matches":[{"path":"fn:doc(\"/triplestore/b7e22c98c9044542-0-1.xml\")/sem:triples", "match-text":["file:///home/dcassel/git/mlbeer/content/bjcp.n3 http://davidcassel.net/bjcp/guidelines/2015#BestBitter http://www.w3.org/2000/01/rdf-schema#label Best Bitter..."]}]},
          {"index":3, "uri":"/triplestore/b7e22c98c9044542-0-3.xml", "path":"fn:doc(\"/triplestore/b7e22c98c9044542-0-3.xml\")", "score":0, "confidence":0, "fitness":0, "href":"/v1/documents?uri=%2Ftriplestore%2Fb7e22c98c9044542-0-3.xml", "mimetype":"application/xml", "format":"xml", "matches":[{"path":"fn:doc(\"/triplestore/b7e22c98c9044542-0-3.xml\")/sem:triples", "match-text":["file:///home/dcassel/git/mlbeer/content/bjcp.n3 http://davidcassel.net/bjcp/guidelines/2015#HistoricalBeer http://www.w3.org/2000/01/rdf-schema#subClassOf..."]}]},
          {"index":4, "uri":"/recipes/6602526511350001825.json", "path":"fn:doc(\"/recipes/6602526511350001825.json\")", "score":0, "confidence":0, "fitness":0, "href":"/v1/documents?uri=%2Frecipes%2F6602526511350001825.json", "mimetype":"application/json", "format":"json", "matches":[{"path":"fn:doc(\"/recipes/6602526511350001825.json\")/object-node()", "match-text":["My Oh Maibock! (BIAB) https://www.brewtoad.com/recipes/my-oh-maibock-biab <p><span style=\"color: #5a5758; font-family: proxima-nova, sans-serif; font-size: 16px; line-height: 24px;..."]}]},
          {"index":5, "uri":"/recipes/14209749539312687878.json", "path":"fn:doc(\"/recipes/14209749539312687878.json\")", "score":0, "confidence":0, "fitness":0, "href":"/v1/documents?uri=%2Frecipes%2F14209749539312687878.json", "mimetype":"application/json", "format":"json", "matches":[{"path":"fn:doc(\"/recipes/14209749539312687878.json\")/object-node()", "match-text":["1868 East India Pale Ale https://byo.com/stories/issue/item/3345-1868-east-india-pale-ale <h5 style=\"font-size: 1em; margin: 0.3em 0px; color: #333333; font-family: georgia, serif; line-height:..."]}]},
          {"index":6, "uri":"/recipes/13406012670869338867.json", "path":"fn:doc(\"/recipes/13406012670869338867.json\")", "score":0, "confidence":0, "fitness":0, "href":"/v1/documents?uri=%2Frecipes%2F13406012670869338867.json", "mimetype":"application/json", "format":"json", "matches":[{"path":"fn:doc(\"/recipes/13406012670869338867.json\")/object-node()", "match-text":["Steve's Scottish 80/- http://beersmith.com/Recipes2/recipe_332.htm <p><span style=\"color: #003572; font-size: medium;\">This is my favourite beer [This week]. The flavour profile is smooth and malty..."]}]},
          {"index":7, "uri":"/recipes/11683829475870556969.json", "path":"fn:doc(\"/recipes/11683829475870556969.json\")", "score":0, "confidence":0, "fitness":0, "href":"/v1/documents?uri=%2Frecipes%2F11683829475870556969.json", "mimetype":"application/json", "format":"json", "matches":[{"path":"fn:doc(\"/recipes/11683829475870556969.json\")/object-node()", "match-text":["Midnight Sun Brewing Full Curl Scotch Ale http://byo.com/hops/item/2325-midnight-sun-brewing-full-curl-scotch-ale-clone <p><em style=\"color: #444444; font-family: georgia, serif; font-size: 13px;..."]}]},
          {"index":8, "uri":"/recipes/17166780967471033731.json", "path":"fn:doc(\"/recipes/17166780967471033731.json\")", "score":0, "confidence":0, "fitness":0, "href":"/v1/documents?uri=%2Frecipes%2F17166780967471033731.json", "mimetype":"application/json", "format":"json", "matches":[{"path":"fn:doc(\"/recipes/17166780967471033731.json\")/object-node()", "match-text":["Steelhead Wee Heavy Scotch Ale http://byo.com/cider/item/1412-steelhead-brewing-wee-heavy-scotch-ale-clone <p><em style=\"color: #444444; font-family: georgia, serif; font-size: 13px; font-weight:..."]}]},
          {"index":9, "uri":"http://marklogic.com/semantics#default-graph", "path":"fn:doc(\"http://marklogic.com/semantics#default-graph\")", "score":0, "confidence":0, "fitness":0, "href":"/v1/documents?uri=http%3A%2F%2Fmarklogic.com%2Fsemantics%23default-graph", "mimetype":"application/xml", "format":"xml", "matches":[{"path":"fn:doc(\"http://marklogic.com/semantics#default-graph\")/sem:graph", "match-text":[]}]},
          {"index":10, "uri":"/triplestore/70e7bbe2d76f1b85-0-2.xml", "path":"fn:doc(\"/triplestore/70e7bbe2d76f1b85-0-2.xml\")", "score":0, "confidence":0, "fitness":0, "href":"/v1/documents?uri=%2Ftriplestore%2F70e7bbe2d76f1b85-0-2.xml", "mimetype":"application/xml", "format":"xml", "matches":[{"path":"fn:doc(\"/triplestore/70e7bbe2d76f1b85-0-2.xml\")/sem:triples", "match-text":["file:///home/dcassel/git/mlbeer/content/hops.n3 http://davidcassel.net/beer/hops#centennial http://davidcassel.net/beer/hops#min-alpha-acids 8 http://davidcassel.net/beer/hops#centennial..."]}]}
        ],
        "qtext":null,
        "metrics": {"query-resolution-time":"PT0.044405S", "snippet-resolution-time":"PT0.035006S", "total-time":"PT0.677407S"}
      }
  }

}
