import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import MemberInfo from '../../models/MemberInfo';

@Component({
  selector: 'app-member',
  standalone: true,
  imports: [
    MatCardModule
  ],
  templateUrl: './member.component.html',
  styleUrl: './member.component.css'
})
export class MemberComponent {
  @Input() member!: MemberInfo
}
