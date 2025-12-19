import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CardComponent } from '../../../../front/components/card/card.component';

@Component({
  selector: 'app-contact-edit',
  imports: [CardComponent, ReactiveFormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class ContactEditComponent {

  name=new FormControl('');
  email=new FormControl('');
  mobile=new FormControl('');
  address=new FormControl('');
  message=new FormControl('');

  http=inject(HttpClient);
  router=inject(Router);
  
  onSubmit() {

    this.http.post("http://localhost:9494/contact", {contactName: this.name.value, emailAddress: this.email.value, phoneNumber: this.mobile.value, address: this.address.value, messageContent: this.message.value}).subscribe(res=>{
      console.log(res);

      alert("Contact Added Successfully");

      this.router.navigate(["/admin/contacts"]);
    })
  }
}
