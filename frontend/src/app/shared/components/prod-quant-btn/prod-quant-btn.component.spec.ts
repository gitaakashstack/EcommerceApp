import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdQuantBtnComponent } from './prod-quant-btn.component';

describe('ProdQuantBtnComponent', () => {
  let component: ProdQuantBtnComponent;
  let fixture: ComponentFixture<ProdQuantBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdQuantBtnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdQuantBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
