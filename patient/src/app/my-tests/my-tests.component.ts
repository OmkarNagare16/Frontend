import { Component } from '@angular/core';

@Component({
  selector: 'app-my-tests',
  templateUrl: './my-tests.component.html',
  styleUrls: ['./my-tests.component.scss'],
})
export class MyTestsComponent {
  // Placeholder for test data
  tests = [
    {
      type: 'Blood Test',
      date: '2024-11-15',
      status: 'Completed',
      comments: 'Normal, no abnormalities found',
      report: 'pdf',
    },
    {
      type: 'X-Ray(Chest)',
      date: '2024-11-15',
      status: 'Completed',
      comments: 'Mild congestion found',
      report: 'pdf',
    },
    {
      type: 'MRI Scan',
      date: '2024-11-15',
      status: 'Pending',
      comments: 'Pending Results',
      report: 'NA',
    },
    {
      type: 'Urine Test',
      date: '2024-11-15',
      status: 'Completed',
      comments: 'High protein levels found',
      report: 'pdf',
    },
    {
      type: 'Sugar Test',
      date: '2024-11-15',
      status: 'Completed',
      comments: 'Normal Range',
      report: 'pdf',
    },
  ];
}