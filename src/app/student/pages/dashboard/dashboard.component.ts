import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { CourseCardComponent } from '../../components/course-card/course-card.component';
import { TutorCardComponent } from '../../components/tutor-card/tutor-card.component';

@Component({
  selector: 'app-dashboard',
  imports: [CardComponent, CourseCardComponent, TutorCardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
