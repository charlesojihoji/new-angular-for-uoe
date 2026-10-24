import { Component, inject } from '@angular/core';
import { BannerComponent, Image } from '../../components/banner/banner.component';
import { CardComponent } from '../../components/card/card.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  imports: [BannerComponent, CardComponent, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  http = inject(HttpClient);
  
  images: Image[]=[
      {
        url:"https://images.unsplash.com/20/cambridge.JPG?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dW5pdmVyc2l0eXxlbnwwfHwwfHx8MA%3D%3D",
        title:"Image1"
      },
      {
        url:"https://money.com/wp-content/uploads/2022/08/Best-Colleges-New-York-2022-Feature.jpg?quality=60&w=1200",
        title:"Image2"
      },
      {
        url:"https://thecriticalreader.com/wp-content/uploads/2018/08/university-2704306_640.jpg",
        title:"Image3"
      },
      {
        url:"https://as2.ftcdn.net/v2/jpg/04/60/08/53/1000_F_460085365_RX2qSv6zxhyabEPZi5Az8yaKrqgEKgCt.jpg",
        title:"Image4"
      }
    ]

    email = new FormControl('');
    password = new FormControl('');
    router = inject(Router);
    
    login(){
     
      // if (this.email.value == 'admin@abc.com' && this.password.value == 'password'){
        
      //   localStorage.setItem('role', 'admin');

      //   this.router.navigate(['admin']);
      // } else
      // {
      //   alert("Invalid Credentials");
      // }
      this.http.post("http://localhost:9595/api/auth/login", {emailAddress: this.email.value, password: this.password.value}).subscribe((res: any) => {
      console.log(res);

      if(res.roles[0] == 'ROLE_ADMIN') {
        localStorage.setItem('role', 'admin');
        this.router.navigate(['admin']);
      }

      if(res.roles[0] == 'ROLE_FACULTY'){
       localStorage.setItem('role', 'faculty');
       this.router.navigate(['faculty']);
      } 

      if(res.roles[0] == 'ROLE_STUDENT'){
        localStorage.setItem('role', 'student');
        this.router.navigate(['student']);
      }
      
    }, error => console.log(error));
    }
}
