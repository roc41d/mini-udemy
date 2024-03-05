import { Injectable } from '@angular/core';
import { Client, init } from 'filestack-js';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FilestackService {
  client!: Client;
  constructor() {
    this.client = init(environment.filestackApiKey);
  }
}