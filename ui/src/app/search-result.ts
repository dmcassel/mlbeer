export class SearchResult {

  public result;

  constructor(result) {
    this.result = result;
  }

  href() {
    return this.result.href;
  }

  getExtractedResult(key: string) {
    if (this.result.extracted) {
      let extracted = this.result.extracted.content.find(
        function (element) {
          return element.hasOwnProperty(key);
        }
      );
      return extracted[key];
    }
  }

  getMatches() {
    return this.result.matches;
  }
}
