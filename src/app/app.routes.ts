import { Routes } from '@angular/router';
import { SimulationComponent } from './simulation/simulation.component';

export const routes: Routes = [
  { path: '', redirectTo: '/simulation', pathMatch: 'full' },
  { path: 'simulation', component: SimulationComponent },
];
