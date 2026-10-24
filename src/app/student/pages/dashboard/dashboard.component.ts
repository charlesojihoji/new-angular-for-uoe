import { Component, inject } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { CourseCardComponent } from '../../components/course-card/course-card.component';
import { TutorCardComponent } from '../../components/tutor-card/tutor-card.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  imports: [CardComponent, CourseCardComponent, TutorCardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  http=inject(HttpClient);
  courses: any=[];
  faculty: any=[];
  constructor() {
     this.http.get("http://localhost:9696/courses").subscribe((res: any)=>{
       console.log(res);
       this.courses=res;
     })

     this.http.get("http://localhost:9090/faculty").subscribe((res: any)=>{
       console.log(res);
       this.faculty=res;
     })
  }
}
