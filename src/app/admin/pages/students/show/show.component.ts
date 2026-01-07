import { NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show',
  imports: [NgIf],
  templateUrl: './show.component.html',
  styleUrl: './show.component.css'
})
export class StudentsShowComponent {

  student: any;

  http=inject(HttpClient);

  route = inject(ActivatedRoute);
  
  constructor() {

    const id = this.route.snapshot.paramMap.get('id');
    this.http.get("http://localhost:9191/students/"+id+"").subscribe((res: any)=>{this.student=res;})
  }
}
