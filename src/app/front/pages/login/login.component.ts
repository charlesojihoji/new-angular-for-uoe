import { Component, inject } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  imports: [CardComponent, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  http = inject(HttpClient);
  router = inject(Router);

  email = new FormControl('');
  password = new FormControl('');

  onSubmit() {
    console.log(this.email.value);
    console.log(this.password.value);

    this.http.post("http://localhost:9595/api/auth/login", {emailAddress: this.email.value, password: this.password.value}).subscribe((res: any) => {
      console.log(res);

      if(res.roles[0] == 'ROLE_ADMIN') this.router.navigate(['admin']);

      if(res.roles[0] == 'ROLE_FACULTY') this.router.navigate(['faculty']);

      if(res.roles[0] == 'ROLE_STUDENT') this.router.navigate(['student']);

      //this.router.navigate(['home']);
    }, error => console.log(error));
  }

}