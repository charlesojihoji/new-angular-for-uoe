import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../../components/sidebar';

@Component({
  selector: 'app-contacts',
  imports: [RouterOutlet, SidebarComponent],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent {

  navs = [
    {level: 'Contacts List', link: '/admin/contacts'},
    {level: 'Add a New Contact', link: '/admin/contacts/create'}
  ]
}
