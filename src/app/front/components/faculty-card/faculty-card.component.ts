import { Component, Input } from '@angular/core';

@Component({
  selector: 'faculty-card',
  imports: [],
  templateUrl: './faculty-card.component.html',
  styleUrl: './faculty-card.component.css'
})
export class FacultyCardComponent {
  @Input() name: string='';
  @Input() subject: string='';
  @Input() rating: number=0;
  @Input() image: string='';
}
