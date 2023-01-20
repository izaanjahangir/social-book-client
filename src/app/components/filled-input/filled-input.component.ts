import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-filled-input',
  templateUrl: './filled-input.component.html',
  styleUrls: ['./filled-input.component.scss'],
})
export class FilledInputComponent implements OnInit {
  @Input()
  placeholder: string = 'Enter text here';

  @Input()
  type: string = 'text';

  @Input()
  required: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
