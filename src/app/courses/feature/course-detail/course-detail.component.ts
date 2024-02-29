import { Component } from '@angular/core';
import { Course, Lecture } from '../../interface/types';
import { COURSES, LECTURES } from '../../data-access/dummy-data';
import { LoaderComponent } from '../../../shared/ui/loader.component';
import { LectureListItemComponent } from '../../ui/lecture-list-item/lecture-list-item.component';
import { CreateLectureComponent } from '../../ui/create-lecture/create-lecture.component';
import { ModalComponent } from '../../../shared/ui/modal.component';

@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [
    LoaderComponent,
    LectureListItemComponent,
    CreateLectureComponent,
    ModalComponent
  ],
  templateUrl: './course-detail.component.html',
  styleUrl: './course-detail.component.scss'
})
export class CourseDetailComponent {
  course: Course | null = COURSES[0];
  isLoadingCourse = false;
  lectures: Lecture[] = LECTURES;
  isCreateLectureModalOpen = false;
}
