import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'app-faculty',
  imports: [CardComponent],
  templateUrl: './faculty.component.html',
  styleUrl: './faculty.component.css'
})
export class FacultyComponent {

  http=inject(HttpClient);

  faculties: any=[];

  ngOnInit(){
    console.log('ComponentInit');

    this.http.get("http://localhost:9090/faculty").subscribe(res=>{
      console.log(res);
      this.faculties=res;
    })
  }
}
