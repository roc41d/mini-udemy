import { Component } from '@angular/core';
import { Course, Lecture } from '../../interface/types';
import { COURSES, LECTURES } from '../../data-access/dummy-data';
import { LoaderComponent } from '../../../shared/ui/loader.component';

@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [LoaderComponent],
  templateUrl: './course-detail.component.html',
  styleUrl: './course-detail.component.scss'
})
export class CourseDetailComponent {
  course: Course | null = COURSES[0];
  isLoadingCourse = false;
  lectures: Lecture[] = LECTURES;
  isCreateLectureModalOpen = false;
}
