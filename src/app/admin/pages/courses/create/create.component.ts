import { Component, inject } from '@angular/core';
import { CardComponent } from '../../../../front/components/card/card.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  imports: [CardComponent, ReactiveFormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CoursesCreateComponent {

  http = inject(HttpClient);
  router = inject(Router);

  course_name = new FormControl('');
  faculty_name = new FormControl('');
  students_enrolled = new FormControl('');

  onSubmit() {
    console.log(this.course_name.value);
    console.log(this.faculty_name.value);
    console.log(this.students_enrolled.value);

    this.http.post('http://localhost:9696/courses', {
      courseName: this.course_name.value,
      courseFacultyMember: this.faculty_name.value,
      initialNumOfStudentsEnrolled: this.students_enrolled.value,
     
    }).subscribe(() => {
      this.router.navigate(['/admin/courses']);
    });
 

  }
}
