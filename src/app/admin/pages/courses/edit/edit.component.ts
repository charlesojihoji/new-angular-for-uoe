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
export class CoursesEditComponent {

  course_id: any;
  course_name = new FormControl('');
  faculty_name = new FormControl('');
  students_enrolled = new FormControl('');

  http = inject(HttpClient);
  router = inject(Router);
  route = inject(ActivatedRoute);
  constructor() {
    
    this.course_id = this.route.snapshot.paramMap.get('id');
    this.http.get("http://localhost:9696/courses/" + this.course_id).subscribe((res: any) => {
      console.log(res);
      this.course_name.setValue(res.courseName);
      this.faculty_name.setValue(res.courseFacultyMember);
      this.students_enrolled.setValue(res.initialNumOfStudentsEnrolled);
    })
  }
  onSubmit() {
    
    this.http.put('http://localhost:9696/courses/update', 
      {
      courseId: this.course_id,
      courseName: this.course_name.value,
      courseFacultyMember: this.faculty_name.value,
      initialNumOfStudentsEnrolled: this.students_enrolled.value
    }).subscribe((res: any) => {
      console.log(res);
      this.router.navigate(['admin/courses']);
    })
  }
}
