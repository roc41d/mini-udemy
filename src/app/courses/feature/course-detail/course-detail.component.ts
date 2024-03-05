import { Component, OnInit, inject } from '@angular/core';
import { Course, Lecture } from '../../interface/types';
import { LoaderComponent } from '../../../shared/ui/loader.component';
import { LectureListItemComponent } from '../../ui/lecture-list-item/lecture-list-item.component';
import { CreateLectureComponent } from '../../ui/create-lecture/create-lecture.component';
import { ModalComponent } from '../../../shared/ui/modal.component';
import { ActivatedRoute } from '@angular/router';
import { Firestore, collection, collectionData, doc, getDoc, orderBy, query } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [
    LoaderComponent,
    LectureListItemComponent,
    CreateLectureComponent,
    ModalComponent,
    AsyncPipe
  ],
  templateUrl: './course-detail.component.html',
  styleUrl: './course-detail.component.scss'
})
export class CourseDetailComponent implements OnInit {
  course!: Course | null;
  isLoadingCourse = false;
  lectures$!: Observable<Lecture[]>;
  isCreateLectureModalOpen = false;
  activatedRoute = inject(ActivatedRoute);
  firestore = inject(Firestore);

  ngOnInit(): void {
    const courseId = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.getCourse(courseId);

    const lectureRef = query(
      collection(this.firestore, `courses/${courseId}/lectures`),
      orderBy('cts', 'asc')
    );
    this.lectures$ = collectionData(lectureRef) as Observable<Lecture[]>;
  }

  async getCourse(courseId: string) {
    this.isLoadingCourse = true;
    const courseDocRef = doc(this.firestore, `courses/${courseId}`);
    const courseDoc = await getDoc(courseDocRef);
    if (courseDoc.exists()) {
      this.course = courseDoc.data() as Course;
    } else {
      console.error('No such document!');
    }
    this.isLoadingCourse = false;
  }
  
}
