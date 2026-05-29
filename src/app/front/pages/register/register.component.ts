import { Component, inject } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [CardComponent, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  http = inject(HttpClient);
  router = inject(Router);
  route = inject(ActivatedRoute);

  full_name = new FormControl('');
  phone_number = new FormControl('');
  email = new FormControl('');
  password = new FormControl('');
  role = new FormControl('student');

  onSubmit() {
    console.log(this.full_name.value);
    console.log(this.phone_number.value);
    console.log(this.email.value);
    console.log(this.password.value);
    console.log(this.role.value);

    this.http.post("http://localhost:9595/api/auth/registerUser", {
      fullName: this.full_name.value,
      phoneNumber: this.phone_number.value,
      emailAddress: this.email.value,
      password: this.password.value,
      role: this.role.value
    }).subscribe(res => {
      console.log(res);
    }, error => console.log(error));
    
    }

}
