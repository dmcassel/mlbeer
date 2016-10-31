import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'facet',
  templateUrl: './facet.component.html',
  styleUrls: ['./facet.component.css']
})
export class FacetComponent implements OnInit {

  @Input() name;
  @Input() values;

  constructor() { }

  ngOnInit() {
  }

  onFacetClick(event) {
    console.log('I got clicked');
  }

}
