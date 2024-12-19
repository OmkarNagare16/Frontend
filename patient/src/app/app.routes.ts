import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '', loadComponent: () => import('./patient-registration/patient-registration.component').then(r => r.PatientRegistrationComponent),
        title: 'Welcome'
    },
    {
        path: 'login', loadComponent: () => import('./patient-login/patient-login.component').then(r => r.PatientLoginComponent),
        title: 'login Page'
    },
    {
        path: 'patient-dashboard',
        loadComponent: () => import('./patient-dashboard/patient-dashboard.component').then(r => r.PatientDashboardComponent),
        title: 'Dashboard Page'
    },
    {
        path: 'MyTest',
        loadComponent: () => import('./my-tests/my-tests.component').then(r => r.MyTestsComponent),
        title: 'MyTest Page'
    },
];
