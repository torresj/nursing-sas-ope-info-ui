import { Routes } from '@angular/router';
import {OpeComponent} from './components/ope/ope.component';
import {HomeComponent} from './components/home/home.component';
import {BolsaComponent} from './components/bolsa/bolsa.component';
import {CriticsComponent} from './components/area-bolsas/critics/critics.component';
import {DialysisComponent} from './components/area-bolsas/dialysis/dialysis.component';
import {NuclearComponent} from './components/area-bolsas/nuclear/nuclear.component';
import {NeonatesComponent} from './components/area-bolsas/neonates/neonates.component';
import {MentalComponent} from './components/area-bolsas/mental/mental.component';
import {WorkComponent} from './components/specific-bolsas/work/work.component';
import {SurgeryComponent} from './components/area-bolsas/surgery/surgery.component';
import {MentalSpecificComponent} from './components/specific-bolsas/mental/mental-specific.component';
import {GyneComponent} from './components/specific-bolsas/gyne/gyne.component';
import {FamilyComponent} from './components/specific-bolsas/family/family.component';
import {PediatricianComponent} from './components/specific-bolsas/pediatrician/pediatrician.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ope', component: OpeComponent },
  { path: 'bolsa', component: BolsaComponent },
  { path: 'critics', component: CriticsComponent },
  { path: 'dialysis', component: DialysisComponent },
  { path: 'nuclear', component: NuclearComponent },
  { path: 'neonates', component: NeonatesComponent },
  { path: 'surgery', component: SurgeryComponent },
  { path: 'mental', component: MentalComponent },
  { path: 'work', component: WorkComponent },
  { path: 'mental/specific', component: MentalSpecificComponent },
  { path: 'gyne', component: GyneComponent },
  { path: 'family', component: FamilyComponent },
  { path: 'pediatrician', component: PediatricianComponent }
];
