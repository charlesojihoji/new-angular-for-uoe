import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from '../../../../front/components/card/card.component';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  imports: [CardComponent, ReactiveFormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class FacultyCreateComponent {

  name=new FormControl('');
  address=new FormControl('');
  phoneNumber=new FormControl('');
  emailAddress=new FormControl('');

  http=inject(HttpClient);
  router=inject(Router);

  onSubmit() {
    this.http.post("http://localhost:9090/faculty", {fullName: this.name.value, address: this.address.value, phoneNumber: this.phoneNumber.value, emailAddress: this.emailAddress.value}).subscribe(res=>{
      console.log(res);

      alert("Faculty Added Successfully");

      this.router.navigate(["/admin/faculty"]);
    })
  }
}
