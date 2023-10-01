import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelvSlotComponent } from './delv-slot.component';

describe('DelvSlotComponent', () => {
  let component: DelvSlotComponent;
  let fixture: ComponentFixture<DelvSlotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelvSlotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DelvSlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
