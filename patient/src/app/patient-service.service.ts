// patient-service.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  private registrationName: string = '';

  constructor() { }

  // Method to save the registration name
  saveRegistrationName(name: string): void {
    this.registrationName = name;
  }

  // Method to retrieve the registration name
  getRegistrationName(): string {
    return this.registrationName;
  }
}
