import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
  // { path: '', redirectTo: 'monitored-live', pathMatch: 'full' },

  {
    path: '',
    component: DashboardComponent,
  },
];
