import { NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  imports: [NgIf],
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.css'
})
export class CoursesDeleteComponent {

  http = inject(HttpClient);
  route = inject(ActivatedRoute);
  router = inject(Router);
  
  course: any;

    constructor() { 

      const id = this.route.snapshot.paramMap.get('id');
      this.http.get("http://localhost:9696/courses/" + id).subscribe((res: any) => { this.course = res; })
    }

  deleteCourse(courseId: string) {


    this.http.delete("http://localhost:9696/courses/delete/" + courseId).subscribe(() => { this.router.navigate(["/admin/courses"]); });

    alert("Course Successfully Deleted");
    this.router.navigate(["/admin/courses"]);
  }
}