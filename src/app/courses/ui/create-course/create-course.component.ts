import { LowerCasePipe, NgIf } from '@angular/common';
import { Component, EventEmitter, Output, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Course } from '../../interface/types';
import { Firestore, doc, setDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-create-course',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf,
    LowerCasePipe
  ],
  templateUrl: './create-course.component.html',
  styleUrl: './create-course.component.scss'
})
export class CreateCourseComponent {
  courseForm!: FormGroup;
  fb = inject(FormBuilder);
  @Output() formSubmit = new EventEmitter<boolean>();
  firestore = inject(Firestore);

  courseCategory: string[] = [ 'Angular', 'Firebase', 'TypeScript', 'JavaScript' ];

  constructor() {
    this.courseForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      category: ['', Validators.required],
    });
  }

  onSubmit() {
    const course: Course = {
      ... this.courseForm.value,
      id: self.crypto.randomUUID()
    };
    const docRef = doc(this.firestore, `courses/${course.id}`);
    setDoc(docRef, course).then(() => {
      this.formSubmit.emit(true);
    }).catch((error) => {
      console.error('Error adding document:', error);
    });
  }
}
