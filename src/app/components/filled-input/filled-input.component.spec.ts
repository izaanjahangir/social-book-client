import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilledInputComponent } from './filled-input.component';

describe('FilledInputComponent', () => {
  let component: FilledInputComponent;
  let fixture: ComponentFixture<FilledInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilledInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilledInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
