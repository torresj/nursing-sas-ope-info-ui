import {Component, Input, signal} from '@angular/core';
import AreaNurseBolsaInfo from '../../../models/bolsa/area/AreaNurseBolsaInfo';
import {Status} from '../../../models/bolsa/Status';
import {MatCard, MatCardContent, MatCardHeader} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';

@Component({
  selector: 'app-area-nurse',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatExpansionModule
  ],
  templateUrl: './area-nurse.component.html',
  styleUrl: './area-nurse.component.css'
})
export class AreaNurseComponent {
  @Input() nurse!: AreaNurseBolsaInfo
  readonly panelOpenState = signal(false);
  protected readonly Status = Status;
}
