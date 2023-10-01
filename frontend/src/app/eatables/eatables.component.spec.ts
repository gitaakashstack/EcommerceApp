import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EatablesComponent } from './eatables.component';

describe('EatablesComponent', () => {
  let component: EatablesComponent;
  let fixture: ComponentFixture<EatablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EatablesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EatablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
