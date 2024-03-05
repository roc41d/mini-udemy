import { Component, OnInit, inject } from '@angular/core';
import { Course } from '../../interface/types';
import { CourseCardComponent } from '../../ui/course-card/course-card.component';
import { ModalComponent } from '../../../shared/ui/modal.component';
import { CreateCourseComponent } from '../../ui/create-course/create-course.component';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [
    CourseCardComponent,
    ModalComponent,
    CreateCourseComponent,
    AsyncPipe
  ],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.scss'
})
export class CourseListComponent implements OnInit{
  isCreateCourseModalOpen = false;
  courses$!: Observable<Course[]>;
  firestore = inject(Firestore);

  ngOnInit(): void {
    const courseRef = collection(this.firestore, 'courses');
    this.courses$ = collectionData(courseRef) as Observable<Course[]>;
  }
}
