import { Routes } from '@angular/router';
import {OpeComponent} from './components/ope/ope.component';
import {HomeComponent} from './components/home/home.component';
import {BolsaComponent} from './components/bolsa/bolsa.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ope', component: OpeComponent },
  { path: 'bolsa', component: BolsaComponent }
];
