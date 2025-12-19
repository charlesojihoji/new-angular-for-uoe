import { NgFor} from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-contact-list',
  imports: [NgFor],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ContactListComponent {

  http=inject(HttpClient);
  
  contacts = [
    {id: 1, name: 'Mohan', mobile: '1234567890', email: 'a@b.com', message: 'Hi'},
    {id: 2, name: 'Rohan', mobile: '1234567890', email: 'a@b.com', message: 'Hi'}
  ];

  constructor() {
    this.http.get("http://localhost:9494/contact").subscribe((res: any)=>{
      console.log(res);

      this.contacts=res.map((contact: any) => ({
        
        id: contact.contactId,
        name: contact.contactName,
        mobile: contact.phoneNumber,
        email: contact.emailAddress,
        message: contact.contactDetailsMessagesDTOList.length}));
    })
  }

  editContact(id: number) {
    this.contacts.find(contact => contact.id === id);
  }

  deleteContact(id: number) {
    this.contacts = this.contacts.filter(contact => contact.id !== id);
  }
}
