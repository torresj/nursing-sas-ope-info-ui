import {Component, ViewEncapsulation} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {MatIcon} from '@angular/material/icon';
import {MatIconButton} from '@angular/material/button';

@Component({
  selector: 'app-nurses-home',
  standalone: true,
  imports: [
    RouterLink,
    MatIcon,
    MatIconButton
  ],
  templateUrl: './nurses-home.component.html',
  styleUrl: './nurses-home.component.css',
  encapsulation: ViewEncapsulation.None
})
export class NursesHomeComponent {
  constructor(
    private router: Router
  ){}

  onBackClick(): void{
    this.router.navigate(["/"]);
  }
}
