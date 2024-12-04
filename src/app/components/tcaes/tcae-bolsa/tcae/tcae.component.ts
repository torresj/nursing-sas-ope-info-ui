import {Component, Input, signal} from '@angular/core';
import PersonnelBolsaInfo from '../../../../models/PersonnelBolsaInfo';
import {Status} from '../../../../models/bolsa/Status';
import {MatCard, MatCardContent, MatCardHeader} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';

@Component({
  selector: 'app-bolsa-tcae',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatExpansionModule
  ],
  templateUrl: './tcae.component.html',
  styleUrl: './tcae.component.css'
})
export class TcaeComponent {
  @Input() tcae!: PersonnelBolsaInfo
  readonly panelOpenState = signal(false);
  protected readonly Status = Status;
}
