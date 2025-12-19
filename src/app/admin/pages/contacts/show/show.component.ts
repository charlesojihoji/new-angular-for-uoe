import { NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-show',
  imports: [NgIf, NgFor],
  templateUrl: './show.component.html',
  styleUrl: './show.component.css'
})
export class ContactShowComponent {

  http=inject(HttpClient);

  route = inject(ActivatedRoute);
  
  contact: any;

  constructor() {

    const id = this.route.snapshot.paramMap.get('id');

    this.http.get("http://localhost:9494/contact/"+id+"").subscribe((res: any)=>{
      console.log(res);
      this.contact=res;
    })
  }
}
