import { Component, Input } from '@angular/core';

@Component({
  selector: 'student-card',
  imports: [],
  templateUrl: './student-card.component.html',
  styleUrl: './student-card.component.css'
})
export class StudentCardComponent {

  @Input() student = {
    id: 0,
    fullName: "Student Name",
    address: "Address",
    phoneNumber: "Phone Number",
    emailAddress: "Email",
    gpa: 0
  };
}
