import { Component, Input, ViewEncapsulation } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import PersonnelOpeInfo from '../../../../models/ope/PersonnelOpeInfo';

@Component({
  selector: 'app-nurse',
  standalone: true,
  imports: [
    MatCardModule
  ],
  templateUrl: './nurse.component.html',
  styleUrl: './nurse.component.css',
  encapsulation: ViewEncapsulation.None
})
export class NurseComponent {
  @Input() nurse!: PersonnelOpeInfo
}
