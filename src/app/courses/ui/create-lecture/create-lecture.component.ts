import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Course, Lecture } from '../../interface/types';
import { Firestore, doc, serverTimestamp, setDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-create-lecture',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-lecture.component.html',
  styleUrl: './create-lecture.component.scss'
})
export class CreateLectureComponent {
  lectureForm!: FormGroup;
  fb = inject(FormBuilder);
  @Input() course!: Course;
  @Output() formSubmit = new EventEmitter<void>();
  firestore = inject(Firestore);

  constructor() {
    this.lectureForm = this.fb.group({
      title: ['', Validators.required],
      duration: ['', Validators.required],
      description: [''],
    });
  }

  onSubmit() {
    const lecture: Lecture = {
      ... this.lectureForm.value,
      id: self.crypto.randomUUID()
    };
    const docRef = doc(this.firestore, `courses/${this.course.id}/lectures/${lecture.id}`);
    setDoc(docRef, {
      ...lecture,
      cts: serverTimestamp() // cts = created timestamp
    }).then(() => {
      this.formSubmit.emit();
      this.lectureForm.reset();
    }).catch((error) => {
      console.error('Error adding document:', error);
    });
  }
}
