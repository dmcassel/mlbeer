import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FacetListComponent } from './facet-list/facet-list.component';
import { FacetComponent } from './facet/facet.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { PaginationComponent } from './pagination/pagination.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    FacetListComponent,
    FacetComponent,
    SearchResultsComponent,
    PaginationComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
