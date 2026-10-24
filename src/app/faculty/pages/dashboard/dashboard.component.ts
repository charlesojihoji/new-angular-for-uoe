import { Component, inject } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { StudentCardComponent } from '../../components/student-card/student-card.component';
import { CourseCardComponent } from '../../components/course-card/course-card.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  imports: [CardComponent, StudentCardComponent, CourseCardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  http=inject(HttpClient);
  courses: any=[];
  students: any=[];
    constructor() {
      this.http.get("http://localhost:9696/courses").subscribe((res: any)=>{
        console.log(res);
        this.courses=res;
      })

      this.http.get("http://localhost:9191/students").subscribe((res: any)=>{
        console.log(res);
        this.students=res;
      })
  
}
}
