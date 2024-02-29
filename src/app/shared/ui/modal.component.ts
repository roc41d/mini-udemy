import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [NgIf],
  template:`
    <div class="fixed inset-0 z-50 overflow-auto bg-gray-900/60 flex" *ngIf="showModal">
        <div class="relative p-8 bg-white w-full max-w-md m-auto flex-col flex rounded-lg">
            <span class="absolute top-0 right-0 p-4">
                <button (click)="onClose()" class="text-black">&times;</button>
            </span>
            <ng-content></ng-content>
        </div>
    </div>
  `
})
export class ModalComponent {
  @Input() showModal = false;
  @Output() closeModal = new EventEmitter<void>();

  onClose() {
    this.closeModal.emit();
  }
}
