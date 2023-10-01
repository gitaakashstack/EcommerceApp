import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterProdsComponent } from './filter-prods.component';

describe('FilterProdsComponent', () => {
  let component: FilterProdsComponent;
  let fixture: ComponentFixture<FilterProdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterProdsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterProdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
