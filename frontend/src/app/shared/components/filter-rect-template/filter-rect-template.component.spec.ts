import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterRectTemplateComponent } from './filter-rect-template.component';

describe('FilterRectTemplateComponent', () => {
  let component: FilterRectTemplateComponent;
  let fixture: ComponentFixture<FilterRectTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterRectTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterRectTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
