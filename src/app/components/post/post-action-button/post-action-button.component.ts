import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-action-button',
  templateUrl: './post-action-button.component.html',
  styleUrls: ['./post-action-button.component.scss'],
})
export class PostActionButtonComponent implements OnInit {
  @Input('icon')
  iconPath?: string;

  @Input('active-icon')
  activeIconPath?: string;

  @Input('active')
  isActive: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
