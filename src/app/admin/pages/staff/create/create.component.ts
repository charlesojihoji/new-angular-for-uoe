import { Component, inject } from '@angular/core';
import { CardComponent } from '../../../../front/components/card/card.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  imports: [CardComponent, ReactiveFormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class StaffCreateComponent {

  name=new FormControl('');
  title=new FormControl('');
  phoneNumber=new FormControl('');
  emailAddress=new FormControl('');
  address=new FormControl('');

  http = inject(HttpClient);
  router = inject(Router);

  onSubmit() {

    this.http.post('http://localhost:9797/staff', {
      "staffName": this.name.value,
      "title": this.title.value,
      "phoneNumber": this.phoneNumber.value,
      "emailAddress": this.emailAddress.value,
      "address": this.address.value
    }).subscribe((res: any) => {
      console.log(res);

      alert("Staff Member Added Successfully");

      this.router.navigate(['admin/staff']);
    })
  }
}
