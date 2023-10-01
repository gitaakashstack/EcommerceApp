import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartCostComponent } from './cart-cost.component';

describe('CartCostComponent', () => {
  let component: CartCostComponent;
  let fixture: ComponentFixture<CartCostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartCostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartCostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
