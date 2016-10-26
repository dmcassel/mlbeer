import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { SearchResult } from '../search-result';

@Component({
  selector: 'search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css'],
  providers: [SearchService]
})
export class SearchResultsComponent implements OnInit {

  results: SearchResult[];

  constructor(searchService: SearchService) {
    this.results = searchService.getResults();
  }

  ngOnInit() {
  }

}
