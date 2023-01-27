import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartChatItemComponent } from './start-chat-item.component';

describe('StartChatItemComponent', () => {
  let component: StartChatItemComponent;
  let fixture: ComponentFixture<StartChatItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartChatItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartChatItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
