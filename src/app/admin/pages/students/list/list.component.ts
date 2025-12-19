import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-list',
  imports: [NgFor],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class StudentsListComponent {
  http=inject(HttpClient);
  
  students: any=[]

  constructor() {
    this.http.get("http://localhost:9191/students").subscribe((res: any)=>{
      console.log(res);
      this.students=res;
    })
  }
  deleteStudent(id: number) {
    this.students = this.students.filter((students: any) => this.students.id !== id);
  }
}
