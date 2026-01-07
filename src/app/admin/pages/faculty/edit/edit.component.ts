import { Component, inject } from '@angular/core';
import { CardComponent } from '../../../../front/components/card/card.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  imports: [CardComponent, ReactiveFormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class FacultyEditComponent {

  id: any;
  name=new FormControl('');
  address=new FormControl('');
  phoneNumber=new FormControl('');
  emailAddress=new FormControl('');

  http=inject(HttpClient);
  router=inject(Router);
  route = inject(ActivatedRoute);
  
  constructor() {

    this.id = this.route.snapshot.paramMap.get('id');
    this.http.get("http://localhost:9090/faculty/"+this.id+"").subscribe((res: any)=>{
      console.log(res);
      this.name.setValue(res.fullName);
      this.address.setValue(res.address);
      this.phoneNumber.setValue(res.phoneNumber);
      this.emailAddress.setValue(res.emailAddress);
    })
  }
  onSubmit() {
    this.http.put(`http://localhost:9090/faculty/update/${this.id}`, 
      {fullName: this.name.value,
        address: this.address.value,
        phoneNumber: this.phoneNumber.value,
        emailAddress: this.emailAddress.value}).subscribe((res: any)=>{
      console.log(res);

      alert("Faculty Successfully Updated");

      this.router.navigate(["/admin/faculty"]);
    }, error => console.log(error));
  }

}
