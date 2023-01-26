import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadPostFormComponent } from './upload-post-form.component';

describe('UploadPostFormComponent', () => {
  let component: UploadPostFormComponent;
  let fixture: ComponentFixture<UploadPostFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadPostFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadPostFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
