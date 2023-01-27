import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatWindowItemComponent } from './chat-window-item.component';

describe('ChatWindowItemComponent', () => {
  let component: ChatWindowItemComponent;
  let fixture: ComponentFixture<ChatWindowItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatWindowItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatWindowItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
