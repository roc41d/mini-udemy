import { Component } from '@angular/core';
import { Course } from '../../interface/types';
import { COURSES } from '../../data-access/dummy-data';
import { CourseCardComponent } from '../../ui/course-card/course-card.component';
import { ModalComponent } from '../../../shared/ui/modal.component';
import { CreateCourseComponent } from '../../ui/create-course/create-course.component';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CourseCardComponent, ModalComponent, CreateCourseComponent],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.scss'
})
export class CourseListComponent {
  isCreateCourseModalOpen = false;
  courses: Course[] = COURSES;
}
