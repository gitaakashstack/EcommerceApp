import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarAtopComponent } from './nav-bar-atop.component';

describe('NavBarAtopComponent', () => {
  let component: NavBarAtopComponent;
  let fixture: ComponentFixture<NavBarAtopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarAtopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavBarAtopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
