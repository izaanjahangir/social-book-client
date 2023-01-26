import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostActionButtonComponent } from './post-action-button.component';

describe('PostActionButtonComponent', () => {
  let component: PostActionButtonComponent;
  let fixture: ComponentFixture<PostActionButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostActionButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostActionButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
