import { NgIf } from '@angular/common';
import { Component, EventEmitter, Output, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-course',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './create-course.component.html',
  styleUrl: './create-course.component.scss'
})
export class CreateCourseComponent {
  courseForm!: FormGroup;
  fb = inject(FormBuilder);
  @Output() formSubmit = new EventEmitter<void>();
  constructor() {
    this.courseForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      category: ['', Validators.required],
    });
  }

  onSubmit() {}
}
