import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CardComponent } from '../../../../front/components/card/card.component';

@Component({
  selector: 'app-create',
  imports: [CardComponent,ReactiveFormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class StudentsCreateComponent {

  name=new FormControl('');
  address=new FormControl('');
  phoneNumber=new FormControl('');
  emailAddress=new FormControl('');
  gpa=new FormControl('');

  http=inject(HttpClient);
  router=inject(Router);

  onSubmit() {

    this.http.post('http://localhost:9191/students', {
      fullName: this.name.value,
      address: this.address.value,
      phoneNumber: this.phoneNumber.value,
      emailAddress: this.emailAddress.value,
      gpa: this.gpa.value
    }).subscribe(() => {
      this.router.navigate(['/admin/students']);
    });
  }
}
