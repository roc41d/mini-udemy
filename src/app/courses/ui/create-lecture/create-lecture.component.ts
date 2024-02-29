import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Course } from '../../interface/types';

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

  constructor() {
    this.lectureForm = this.fb.group({
      title: ['', Validators.required],
      duration: ['', Validators.required],
      description: [''],
    });
  }

  onSubmit() {}
}
