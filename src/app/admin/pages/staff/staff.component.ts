import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../../components/sidebar';

@Component({
  selector: 'app-staff',
  imports: [RouterOutlet, SidebarComponent],
  templateUrl: './staff.component.html',
  styleUrl: './staff.component.css'
})
export class AdminStaffComponent {

  navs = [
    {level: 'A List of Staff', link: '/admin/staff'},
    {level: 'Add a New Staff Member', link: '/admin/staff/create'}
  ]
}
