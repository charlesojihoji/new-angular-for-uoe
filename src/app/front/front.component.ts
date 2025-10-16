import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-front',
  imports: [NavbarComponent, RouterOutlet],
  templateUrl: './front.component.html',
  styleUrl: './front.component.css'
})
export class FrontComponent {

  navs=[
    {link:'/', level:'Home'},
    {link:'/about', level:'About'},
    {link:'/contact', level: 'Contact'},
    {link:'/courses', level: 'Courses'},
    {link:'/faculty', level: 'Faculty'}
  ];
}
