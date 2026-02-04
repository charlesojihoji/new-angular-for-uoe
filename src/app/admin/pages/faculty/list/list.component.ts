import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-list',
  imports: [NgFor],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class FacultyListComponent {

  http=inject(HttpClient);
  
  faculties: any=[];

  constructor() {
    this.http.get("http://localhost:9090/faculty").subscribe((res: any)=>{
      console.log(res);
      this.faculties=res;
    })
  }
}
