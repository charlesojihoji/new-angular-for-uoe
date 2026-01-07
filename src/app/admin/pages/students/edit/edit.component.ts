import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CardComponent } from '../../../../front/components/card/card.component';

@Component({
  selector: 'app-edit',
  imports: [CardComponent, ReactiveFormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class StudentsEditComponent {

  id: any;
  name=new FormControl('');
  address=new FormControl('');
  phoneNumber=new FormControl('');
  emailAddress=new FormControl('');
  gpa=new FormControl('');

  http=inject(HttpClient);
  router=inject(Router);
  route = inject(ActivatedRoute);

  constructor() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.http.get("http://localhost:9191/students/"+this.id+"").subscribe((res: any)=>{
      console.log(res);
      this.name.setValue(res.fullName);
      this.address.setValue(res.address);
      this.phoneNumber.setValue(res.phoneNumber);
      this.emailAddress.setValue(res.emailAddress);
      this.gpa.setValue(res.gpa);
    })
  }

  onSubmit(){
    this.http.put(`http://localhost:9191/students/update/${this.id}`, 
      {
        id: this.id,
        fullName: this.name.value,
        address: this.address.value,
        phoneNumber: this.phoneNumber.value,
        emailAddress: this.emailAddress.value,
        gpa: this.gpa.value
      }).subscribe((res: any)=>{
      console.log(res);
  
      alert("Student Successfully Updated");
  
      this.router.navigate(["/admin/students"]);
    }, error => console.log(error));
  }
}
