import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'faculty-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  router = inject(Router);

  logout() {
    localStorage.removeItem('role');
    this.router.navigate([''])
  }
}
