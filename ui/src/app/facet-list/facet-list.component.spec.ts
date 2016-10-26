/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FacetListComponent } from './facet-list.component';

describe('FacetListComponent', () => {
  let component: FacetListComponent;
  let fixture: ComponentFixture<FacetListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacetListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
