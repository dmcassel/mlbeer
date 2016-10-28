import { Component, OnInit, Input } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
  providers: [SearchService]
})
export class PaginationComponent implements OnInit {

  pageSize: number;
  totalItems: number;
  currentPage: number;
  maxPage: number;
  pages: number[];

  constructor(searchService: SearchService) {
    this.pageSize = searchService.getPageSize();
    this.totalItems = searchService.getTotal();
    this.currentPage = searchService.getCurrentPage();

    this.maxPage = Math.ceil(this.totalItems / this.pageSize);

    let array = new Array(this.maxPage);
    this.pages = array.fill(0).map((x,i)=>i + 1)

  }

  ngOnInit() {
  }

}
