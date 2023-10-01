import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortProdsComponent } from './sort-prods.component';

describe('SortProdsComponent', () => {
  let component: SortProdsComponent;
  let fixture: ComponentFixture<SortProdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortProdsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SortProdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
