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
export class FacultyShowComponent {

  faculty: any;

  http=inject(HttpClient);

  route = inject(ActivatedRoute);
  
  constructor() {

    const id = this.route.snapshot.paramMap.get('id');
    this.http.get("http://localhost:9090/faculty/"+id+"").subscribe((res: any)=>{this.faculty=res;})
  }
}
