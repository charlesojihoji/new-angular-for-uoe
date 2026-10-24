import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { CourseCardComponent } from '../../components/course-card/course-card.component';

@Component({
  selector: 'app-courses',
  imports: [CourseCardComponent],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {

  http=inject(HttpClient);

  courses: any=[];

  ngOnInit(){
    console.log('ComponentInit');

    this.http.get("http://localhost:9696/courses").subscribe((res: any)=>{
      console.log(res);
      
      //Sift through the courses and avoid returning duplicate courses
      this.courses=res.filter((val:any, index:number, self:any) => {
        return index === self.findIndex((o:any) => o.courseName===val.courseName);
      });


    })
  }
}
