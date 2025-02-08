import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {
  constructor(private router: Router) {}

  navForYou() {
    this.router.navigate(['']);
  }
  navFavorite() {
    this.router.navigate(['favorite']);
  }
  navMysales() {
    this.router.navigate(['mysales']);
  }
}
