import { Component, Input, inject } from '@angular/core';
import { Course, Lecture } from '../../interface/types';
import { CommonModule } from '@angular/common';
import { Firestore, doc, updateDoc } from '@angular/fire/firestore';
import { FilestackService } from '../../../shared/data-access/filestack.service';
import { PickerFileMetadata, PickerOptions } from 'filestack-js';

@Component({
  selector: 'app-lecture-list-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lecture-list-item.component.html',
  styleUrl: './lecture-list-item.component.scss'
})
export class LectureListItemComponent {
  isOpen = false;
  @Input() lecture!: Lecture;
  @Input() course!: Course;
  firestack = inject(FilestackService);
  firestore = inject(Firestore);

  toggle() {
    if (!this.lecture.description && !this.lecture.videoUrl) {
      return;
    }
    this.isOpen = !this.isOpen;
  }

  uploadLectureVideo(event: Event) {
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
        this.deletePreviousVideo();
        this.setLectureVideo(res.filesUploaded[0]);
      }
    }
    this.firestack.openPicker(pickerOptions);
  }

  async setLectureVideo(file: PickerFileMetadata) {
    const docRef = doc(this.firestore, `courses/${this.course.id}/lectures/${this.lecture.id}`);
    await updateDoc(docRef, {
      ...this.lecture,
      videoUrl: file.url
    });
    this.lecture.videoUrl = file.url;
  }

  async deletePreviousVideo() {
    if (!this.lecture.videoUrl) {
      return
    }
    const handle = this.lecture.videoUrl.split('/').at(-1);
    if (!handle) {
      return
    }
    await this.firestack.deleteFile(handle);
  }
}
