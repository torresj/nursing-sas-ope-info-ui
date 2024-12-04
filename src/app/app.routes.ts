import { Routes } from '@angular/router';
import {OpeComponent} from './components/nurses/ope/ope.component';
import {HomeComponent} from './components/home/home.component';
import {BolsaComponent} from './components/nurses/bolsa/bolsa.component';
import {CriticsComponent} from './components/nurses/area-bolsas/critics/critics.component';
import {DialysisComponent} from './components/nurses/area-bolsas/dialysis/dialysis.component';
import {NuclearComponent} from './components/nurses/area-bolsas/nuclear/nuclear.component';
import {NeonatesComponent} from './components/nurses/area-bolsas/neonates/neonates.component';
import {MentalComponent} from './components/nurses/area-bolsas/mental/mental.component';
import {WorkComponent} from './components/nurses/specific-bolsas/work/work.component';
import {SurgeryComponent} from './components/nurses/area-bolsas/surgery/surgery.component';
import {MentalSpecificComponent} from './components/nurses/specific-bolsas/mental/mental-specific.component';
import {GyneComponent} from './components/nurses/specific-bolsas/gyne/gyne.component';
import {FamilyComponent} from './components/nurses/specific-bolsas/family/family.component';
import {PediatricianComponent} from './components/nurses/specific-bolsas/pediatrician/pediatrician.component';
import {NursesHomeComponent} from './components/nurses/nurses-home/nurses-home.component';
import {TcaesHomeComponent} from './components/tcaes/tcaes-home/tcaes-home.component';
import {TcaeOpeComponent} from './components/tcaes/tcae-ope/tcae-ope.component';
import {TcaeBolsaComponent} from './components/tcaes/tcae-bolsa/tcae-bolsa.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'nurses', component: NursesHomeComponent },
  { path: 'nurses/ope', component: OpeComponent },
  { path: 'nurses/bolsa', component: BolsaComponent },
  { path: 'nurses/critics', component: CriticsComponent },
  { path: 'nurses/dialysis', component: DialysisComponent },
  { path: 'nurses/nuclear', component: NuclearComponent },
  { path: 'nurses/neonates', component: NeonatesComponent },
  { path: 'nurses/surgery', component: SurgeryComponent },
  { path: 'nurses/mental', component: MentalComponent },
  { path: 'nurses/work', component: WorkComponent },
  { path: 'nurses/mental/specific', component: MentalSpecificComponent },
  { path: 'nurses/gyne', component: GyneComponent },
  { path: 'nurses/family', component: FamilyComponent },
  { path: 'nurses/pediatrician', component: PediatricianComponent },
  { path: 'tcaes', component: TcaesHomeComponent },
  { path: 'tcaes/ope', component: TcaeOpeComponent },
  { path: 'tcaes/bolsa', component: TcaeBolsaComponent }
];
