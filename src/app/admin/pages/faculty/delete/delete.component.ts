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
export class FacultyDeleteComponent {

  faculty: any;

  http = inject(HttpClient);
  route = inject(ActivatedRoute);
  router = inject(Router);

  constructor() {

    const id = this.route.snapshot.paramMap.get('id');
    this.http.get("http://localhost:9090/faculty/" + id + "").subscribe((res: any) => { this.faculty = res; })
  }

  deleteFaculty(id: number) {
    console.log(id);
    this.http.delete(`http://localhost:9090/faculty/delete/${id}`).subscribe((res: any) => {
      console.log(res);

      // alert("Faculty Successfully Deleted");
      // this.router.navigate(["/admin/faculty"]);
    })
      alert("Faculty Successfully Deleted");
      this.router.navigate(["/admin/faculty"]);
  }

}
