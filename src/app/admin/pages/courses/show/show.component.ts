import { NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-show',
  imports: [NgIf],
  templateUrl: './show.component.html',
  styleUrl: './show.component.css'
})
export class CoursesShowComponent {

  course: any={};

  http=inject(HttpClient);
  route=inject(ActivatedRoute);
  constructor() { 

    const id = this.route.snapshot.paramMap.get('id');
    this.http.get("http://localhost:9696/courses/"+id).subscribe((res: any)=>{this.course=res;
      console.log(this.course);
    })
  }
}
