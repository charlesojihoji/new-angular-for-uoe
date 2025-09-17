import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'college';
  navs=[
    {link:'/', level:'Home'},
    {link:'/about', level:'About'},
    {link:'/contact', level: 'Contact'},
    {link:'/courses', level: 'Courses'},
    {link:'/faculty', level: 'Faculty'}
  ];
}
