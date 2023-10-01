import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryNavBarComponent } from './category-nav-bar.component';

describe('NavBarComponent', () => {
  let component: CategoryNavBarComponent;
  let fixture: ComponentFixture<CategoryNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategoryNavBarComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CategoryNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
