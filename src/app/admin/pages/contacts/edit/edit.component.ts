import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CardComponent } from '../../../../front/components/card/card.component';

@Component({
  selector: 'app-contact-edit',
  imports: [CardComponent, ReactiveFormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class ContactEditComponent {

  name = new FormControl('');
  email = new FormControl('');
  mobile = new FormControl('');
  address = new FormControl('');
  message = new FormControl('');

  http = inject(HttpClient);
  router = inject(Router);
  route = inject(ActivatedRoute);
  id: any;

  constructor() {

    this.id = this.route.snapshot.paramMap.get('id');

    this.http.get("http://localhost:9494/contact/" + this.id + "").subscribe((res: any) => {

      this.name.setValue(res.contactName);
      this.email.setValue(res.emailAddress);
      this.mobile.setValue(res.phoneNumber);
      this.address.setValue(res.address);
      this.message.setValue(res.contactDetailsMessagesDTOList[0].messageContent);
    })
  }

  onSubmit() {

    this.http.post("http://localhost:9494/contact/update/", { contactName: this.name.value, emailAddress: this.email.value, phoneNumber: this.mobile.value, address: this.address.value, contactDetailsMessagesDTOList:[{messageContent: this.message.value}]}).subscribe(res => {
      console.log(res);

      alert("Contact Added Successfully");

      this.router.navigate(["/admin/contacts"]);
    })
  }
}
