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
export class ContactDeleteComponent {

  contact: any;

  http = inject(HttpClient);
  route = inject(ActivatedRoute);
  router = inject(Router);
  id: any;

  constructor() { 

    this.id = this.route.snapshot.paramMap.get('id');
    this.http.get("http://localhost:9494/contact/" + this.id + "").subscribe((res: any) => { this.contact = res; })
  }

  deleteContact(id: string) {
    this.http.delete(`http://localhost:9494/contact/${id}`).subscribe((res: any) => {
      console.log(res);
      // alert("Contact Successfully Deleted");
      // this.router.navigate(["/admin/contacts"]);
    })

    alert("Contact Successfully Deleted");
    this.router.navigate(["/admin/contacts"]);
  }
}
