import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { StudentCardComponent } from '../../components/student-card/student-card.component';
import { CourseCardComponent } from '../../components/course-card/course-card.component';

@Component({
  selector: 'app-dashboard',
  imports: [CardComponent, StudentCardComponent, CourseCardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
