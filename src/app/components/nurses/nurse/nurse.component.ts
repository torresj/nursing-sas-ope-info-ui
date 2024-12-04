import {Component, Input, signal} from '@angular/core';
import PersonnelBolsaInfo from '../../../models/PersonnelBolsaInfo';
import {MatCard, MatCardContent, MatCardHeader} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {Status} from '../../../models/bolsa/Status';

@Component({
  selector: 'app-nurse',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatExpansionModule
  ],
  templateUrl: './nurse.component.html',
  styleUrl: './nurse.component.css'
})
export class NurseComponent {
  @Input() nurse!: PersonnelBolsaInfo
  readonly panelOpenState = signal(false);
  protected readonly Status = Status;
}
