import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InboxWindowComponent } from './inbox-window.component';

describe('InboxWindowComponent', () => {
  let component: InboxWindowComponent;
  let fixture: ComponentFixture<InboxWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InboxWindowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InboxWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
