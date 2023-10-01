import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimContentContainerComponent } from './prim-content-container.component';

describe('PrimContentContainerComponent', () => {
  let component: PrimContentContainerComponent;
  let fixture: ComponentFixture<PrimContentContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimContentContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimContentContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
