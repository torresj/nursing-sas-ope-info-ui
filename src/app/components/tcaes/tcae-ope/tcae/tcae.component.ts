import {Component, Input, ViewEncapsulation} from '@angular/core';
import PersonnelOpeInfo from '../../../../models/ope/PersonnelOpeInfo';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-tcae',
  standalone: true,
  imports: [
    MatCardModule
  ],
  templateUrl: './tcae.component.html',
  styleUrl: './tcae.component.css',
  encapsulation: ViewEncapsulation.None
})
export class TcaeComponent {
  @Input() tcae!: PersonnelOpeInfo
}
