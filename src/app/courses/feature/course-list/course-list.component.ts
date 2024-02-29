import { Component } from '@angular/core';
import { Course } from '../../interface/types';
import { COURSES } from '../../data-access/dummy-data';
import { CourseCardComponent } from '../../ui/course-card/course-card.component';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CourseCardComponent],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.scss'
})
export class CourseListComponent {
  courses: Course[] = COURSES;
}
