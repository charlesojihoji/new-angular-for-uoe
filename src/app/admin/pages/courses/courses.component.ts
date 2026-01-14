import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../../components/sidebar';

@Component({
  selector: 'app-courses',
  imports: [RouterOutlet, SidebarComponent],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {

   navs = [
    {level: 'Course List', link: '/admin/courses'},
    {level: 'Add a New Course', link: '/admin/courses/create'}
  ]
}
