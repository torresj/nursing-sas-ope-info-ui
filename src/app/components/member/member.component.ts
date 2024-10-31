import { Component, Input, ViewEncapsulation } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import MemberInfo from '../../models/MemberInfo';

@Component({
  selector: 'app-member',
  standalone: true,
  imports: [
    MatCardModule
  ],
  templateUrl: './member.component.html',
  styleUrl: './member.component.css',
  encapsulation: ViewEncapsulation.None
})
export class MemberComponent {
  @Input() member!: MemberInfo
}
