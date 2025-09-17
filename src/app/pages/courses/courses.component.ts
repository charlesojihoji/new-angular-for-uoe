import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-courses',
  imports: [],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {

  http=inject(HttpClient);

  courses: any=[];

  ngOnInit(){
    console.log('ComponentInit');

    this.http.get("http://localhost:9292/grades").subscribe((res: any)=>{
      console.log(res);
      
      //Sift through the courses and avoid returning duplicate courses
      this.courses=res.filter((val:any, index:number, self:any) => {
        return index === self.findIndex((o:any) => o.courseName===val.courseName);
      });


    })
  }
}
