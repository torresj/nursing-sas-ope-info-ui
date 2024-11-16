import {Component, Input, signal} from '@angular/core';
import NurseBolsaInfo from '../../models/bolsa/specific/NurseBolsaInfo';
import {MatCard, MatCardContent, MatCardHeader} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {Status} from '../../models/bolsa/Status';

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
  @Input() nurse!: NurseBolsaInfo
  readonly panelOpenState = signal(false);
  protected readonly Status = Status;
}
