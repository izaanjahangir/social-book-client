import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartChatMessageComponent } from './start-chat-message.component';

describe('StartChatMessageComponent', () => {
  let component: StartChatMessageComponent;
  let fixture: ComponentFixture<StartChatMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartChatMessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartChatMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
