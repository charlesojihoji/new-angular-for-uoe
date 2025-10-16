import { Component, inject } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  imports: [CardComponent, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  name=new FormControl('');
  email=new FormControl('');
  mobile=new FormControl('');
  address=new FormControl('');
  message=new FormControl('');

  http=inject(HttpClient);

  
  onSubmit() {
    console.log(this.name.value);
    console.log(this.email.value);
    console.log(this.mobile.value);
    console.log(this.address.value);
    console.log(this.message.value);

    this.http.post("http://localhost:9494/contact", {contactName: this.name.value, emailAddress: this.email.value, phoneNumber: this.mobile.value, address: this.address.value, messageContent: this.message.value}).subscribe(res=>{
      console.log(res);
    })
  }

}
