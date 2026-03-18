import { Component, inject } from '@angular/core';
import { CardComponent } from '../../../../front/components/card/card.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  imports: [CardComponent, ReactiveFormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class StaffEditComponent {

  id: any;
  staffName=new FormControl('');
  title=new FormControl('');
  phoneNumber=new FormControl('');
  emailAddress=new FormControl('');
  address=new FormControl('');

  http = inject(HttpClient);
  router = inject(Router);
  route = inject(ActivatedRoute);
  
  constructor() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.http.get("http://localhost:9797/staff/"+this.id+"").subscribe((res: any)=>{
      console.log(res);
      this.staffName.setValue(res.staffName);
      this.title.setValue(res.title);
      this.phoneNumber.setValue(res.phoneNumber);
      this.emailAddress.setValue(res.emailAddress);
      this.address.setValue(res.address);
    })
  }

  onSubmit() {
    this.http.put(`http://localhost:9797/staff`, 
      {
        staffId: this.id,
        staffName: this.staffName.value,
        title: this.title.value,
        phoneNumber: this.phoneNumber.value,
        emailAddress: this.emailAddress.value,
        address: this.address.value
      }).subscribe((res: any)=>{
      console.log(res);
  
      alert("Staff Member Successfully Updated");
  
      this.router.navigate(["/admin/staff"]);
    }, error => console.log(error));
  }
}
