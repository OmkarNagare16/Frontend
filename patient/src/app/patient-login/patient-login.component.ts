import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';

@Component({
    selector: 'app-patient-login',
    imports: [MatFormFieldModule,MatInputModule,FormsModule,CommonModule,MatCardModule,MatButtonModule,ReactiveFormsModule],
    templateUrl: './patient-login.component.html',
    styleUrl: './patient-login.component.scss'
})
export class PatientLoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder,private router:Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Form Submitted', this.loginForm.value);
      this.router.navigate(['/patient-dashboard']);
    } else {
      console.log('Invalid Form');
    }
  }
}
