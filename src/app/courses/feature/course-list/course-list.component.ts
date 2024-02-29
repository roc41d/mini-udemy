import { Component } from '@angular/core';
import { Course } from '../../interface/types';
import { COURSES } from '../../data-access/dummy-data';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.scss'
})
export class CourseListComponent {
  courses: Course[] = COURSES;
}
