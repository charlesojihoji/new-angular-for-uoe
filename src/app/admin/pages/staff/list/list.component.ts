import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-list',
  imports: [NgFor],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class StaffListComponent {

  http=inject(HttpClient);
  
  staffmembers: any=[];

  constructor() {
    this.http.get("http://localhost:9797/staff").subscribe((res: any)=>{
      console.log(res);
      this.staffmembers=res;
    })
  }
}
