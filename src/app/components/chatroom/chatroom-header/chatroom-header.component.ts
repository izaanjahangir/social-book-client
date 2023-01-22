import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatroom-header',
  templateUrl: './chatroom-header.component.html',
  styleUrls: ['./chatroom-header.component.scss'],
})
export class ChatroomHeaderComponent implements OnInit {
  @Input()
  rootScreen: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
