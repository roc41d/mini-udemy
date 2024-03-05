import { Injectable } from '@angular/core';
import { Client, PickerOptions, init } from 'filestack-js';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FilestackService {
  client!: Client;
  constructor() {
    this.client = init(environment.filestackApiKey);
  }

  openPicker(config: PickerOptions) {
    return this.client.picker(config).open();
  }

  deleteImage(handle: string) {
    return this.client.remove(handle, {
      policy: environment.filestackPolicy,
      signature: environment.filestackSignature
    });
  }
}