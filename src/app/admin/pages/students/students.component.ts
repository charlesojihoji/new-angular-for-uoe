import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../../components/sidebar';

@Component({
  selector: 'app-students',
  imports: [RouterOutlet, SidebarComponent],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class AdminStudentsComponent {
navs = [
    {level: 'A List of Students', link: '/admin/students'},
    {level: 'Add a New Student', link: '/admin/students/create'}
  ]
}
