import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../../components/sidebar';

@Component({
  selector: 'app-faculty',
  imports: [RouterOutlet, SidebarComponent],
  templateUrl: './faculty.component.html',
  styleUrl: './faculty.component.css'
})
export class AdminFacultyComponent {

   navs = [
    {level: 'Faculty List', link: '/admin/faculty'},
    {level: 'Add a New Faculty', link: '/admin/faculty/create'}
  ]
}
