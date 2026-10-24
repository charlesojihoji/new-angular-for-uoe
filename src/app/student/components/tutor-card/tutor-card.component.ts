import { Component, Input } from '@angular/core';

@Component({
  selector: 'tutor-card',
  imports: [],
  templateUrl: './tutor-card.component.html',
  styleUrl: './tutor-card.component.css'
})
export class TutorCardComponent {

  @Input() tutor = {
    id: 0,
    fullName: "Tutor Name",
    emailAddress: "Email",
    phoneNumber: "Phone Number",
    address: "Address"
  }
}
