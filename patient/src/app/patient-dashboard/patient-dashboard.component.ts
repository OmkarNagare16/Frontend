import {Component, OnInit} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { PatientService } from '../patient-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-patient-dashboard',
  imports: [MatListModule,MatIconModule,MatToolbarModule,MatButtonModule,RouterModule,CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './patient-dashboard.component.html',
  styleUrl: './patient-dashboard.component.scss'
})
export class PatientDashboardComponent implements OnInit {
  firstName: string | undefined;

  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
    // Retrieve the name dynamically from the service
    this.firstName = this.patientService.getRegistrationName();
  }
}
