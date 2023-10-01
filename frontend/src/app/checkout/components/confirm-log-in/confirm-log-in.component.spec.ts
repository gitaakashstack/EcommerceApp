import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmLogInComponent } from './confirm-log-in.component';

describe('ConfirmLogInComponent', () => {
  let component: ConfirmLogInComponent;
  let fixture: ComponentFixture<ConfirmLogInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmLogInComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmLogInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
