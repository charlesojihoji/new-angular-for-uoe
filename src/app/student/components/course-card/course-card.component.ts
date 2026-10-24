import { Component, Input } from '@angular/core';

@Component({
  selector: 'course-card',
  imports: [],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {

  @Input() course = {
    courseId: 0,
    courseName: "Course Name",
    courseDescription: "Course Description",
    courseImage: "",
    courseStartDate: "",
    courseEndDate: ""
  }
}
