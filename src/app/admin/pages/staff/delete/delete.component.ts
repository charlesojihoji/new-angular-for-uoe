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
export class StaffDeleteComponent {

  staff: any;
  http = inject(HttpClient);
  route = inject(ActivatedRoute);
  router = inject(Router);
  constructor() {
    const id = this.route.snapshot.paramMap.get('id');
    this.http.get("http://localhost:9797/staff/" + id + "").subscribe((res: any) => { this.staff = res; })
  }

  deleteStaff(id: any) {
    this.http.delete("http://localhost:9797/staff/" + id + "").subscribe((res: any) => { this.router.navigate(['/admin/staff']) })
  }
}
