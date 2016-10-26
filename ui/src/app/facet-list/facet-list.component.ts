import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'facet-list',
  templateUrl: './facet-list.component.html',
  styleUrls: ['./facet-list.component.css'],
  providers: [SearchService]
})
export class FacetListComponent implements OnInit {

  facets;

  constructor(searchService: SearchService) {
    this.facets = searchService.getFacets();
  }

  ngOnInit() {
  }

}
