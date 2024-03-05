import { Component, Input, inject } from '@angular/core';
import { Course } from '../../interface/types';
import { RouterLink } from '@angular/router';
import { FilestackService } from '../../../shared/data-access/filestack.service';
import { PickerFileMetadata, PickerOptions } from 'filestack-js';
import { Firestore, updateDoc, doc } from '@angular/fire/firestore';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.scss'
})
export class CourseCardComponent {
  @Input() course!: Course;
  image: PickerFileMetadata | null = null;
  firestack = inject(FilestackService);
  firestore = inject(Firestore);

  editCourseImage(event: Event) {
    event.stopPropagation();
    const pickerOptions: PickerOptions = {
      fromSources: [
        'local_file_system', 
        'imagesearch',
        'unsplash',
      ],
      maxFiles: 1,
      uploadInBackground: false,
      onUploadDone: (res) => {
        this.deletePreviousImage();
        this.setCouseImage(res.filesUploaded[0]);
      }
    }
    this.firestack.openPicker(pickerOptions);
  }

  async setCouseImage(file: PickerFileMetadata) {
    const docRef = doc(this.firestore, `courses/${this.course.id}`);
    await updateDoc(docRef, {
      ...this.course,
      imageUrl: file.url
    });
    this.image = file;
    this.course.imageUrl = file.url;
  }

  async deletePreviousImage() {
    if (!this.course.imageUrl) {
      return
    }
    const handle = this.course.imageUrl.split('/').at(-1);
    if (!handle) {
      return
    }
    await this.firestack.deleteImage(handle);
  }
}
