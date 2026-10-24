import { Component, inject } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin',
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

  // router = inject(Router);
  
  // constructor() {

  //   if(localStorage.getItem('role') != 'admin'){

  //     this.router.navigate(['']);
  //   }
  // }

}
