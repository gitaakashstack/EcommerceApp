import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotItemComponent } from './slot-item.component';

describe('SlotItemComponent', () => {
  let component: SlotItemComponent;
  let fixture: ComponentFixture<SlotItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlotItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlotItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
