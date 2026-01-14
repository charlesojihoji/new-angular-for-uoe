import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-list',
  imports: [NgFor],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class CoursesListComponent {

  http=inject(HttpClient)
  courses: any=[]
  constructor() {
    this.http.get("http://localhost:9696/courses").subscribe((res: any)=>{
      console.log(res);
      this.courses=res;
    })
  }
}
