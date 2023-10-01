import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelvAddressComponent } from './delv-address.component';

describe('DelvAddressComponent', () => {
  let component: DelvAddressComponent;
  let fixture: ComponentFixture<DelvAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelvAddressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DelvAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
