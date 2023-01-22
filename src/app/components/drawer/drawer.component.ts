import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss'],
})
export class DrawerComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onLogout() {
    this.router.navigateByUrl('/login');
  }
}
