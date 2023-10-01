import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostersComponent } from './posters.component';

describe('PostersComponent', () => {
  let component: PostersComponent;
  let fixture: ComponentFixture<PostersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
