import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutStepsTitleComponent } from './checkout-steps-title.component';

describe('CheckoutStepsTitleComponent', () => {
  let component: CheckoutStepsTitleComponent;
  let fixture: ComponentFixture<CheckoutStepsTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckoutStepsTitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckoutStepsTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
