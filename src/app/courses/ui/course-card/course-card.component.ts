import { Component, Input } from '@angular/core';
import { Course } from '../../interface/types';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.scss'
})
export class CourseCardComponent {
  @Input() course!: Course;
  image: File | null = null;
}
