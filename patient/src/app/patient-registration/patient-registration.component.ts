import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { PatientService } from '../patient-service.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-patient-registration',
  imports: [CommonModule, ReactiveFormsModule],  // HttpClientModule should be imported in app.module.ts
  templateUrl: './patient-registration.component.html',
  styleUrls: ['./patient-registration.component.scss']
})
export class PatientRegistrationComponent {
  signupForm: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private router: Router, 
    private patientService: PatientService, 
    private http: HttpClient
  ) {
    this.signupForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.pattern('^[A-Za-z]+$')]],
      lastName: ['', [Validators.required, Validators.pattern('^[A-Za-z]+$')]],
      email: ['', [Validators.required, Validators.email]],
      contact: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
      gender: ['', [Validators.required]],
    }, { 
      validators: this.passwordMatchValidator  // Custom validator to check password match
    });
  }

  // Custom validator to check if password and confirm password match
  passwordMatchValidator(group: AbstractControl): ValidationErrors | null {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }

  onSubmit() {
    if (this.signupForm.valid) {
      const formValues = this.signupForm.value;  // Get form values

      // Save patient registration info if needed
      this.patientService.saveRegistrationName(formValues.firstName);
     

      // Send form data to the backend API
      this.http.post('http://localhost:8081/register', formValues)
        .subscribe(
          response => {
            console.log('Patient registered successfully', response);
 
            this.router.navigate(['/login']);
            alert("Patient registered successfully!");  
           
          },
          (error: HttpErrorResponse)=>{
            console.error('Error registering patient', error);

            alert("Error registering patient. Please try again.");
          }
        );
        console.log('Form Submitted', formValues);
    } else {
      console.log('Form is invalid');
    }
  }
}
