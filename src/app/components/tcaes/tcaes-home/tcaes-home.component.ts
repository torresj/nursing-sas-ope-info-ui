import {Component, ViewEncapsulation} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {MatIcon} from '@angular/material/icon';
import {MatIconButton} from '@angular/material/button';

@Component({
  selector: 'app-tcaes-home',
  standalone: true,
  imports: [
    RouterLink,
    MatIcon,
    MatIconButton
  ],
  templateUrl: './tcaes-home.component.html',
  styleUrl: './tcaes-home.component.css',
  encapsulation: ViewEncapsulation.None
})
export class TcaesHomeComponent {
  constructor(
    private router: Router
  ){}

  onBackClick(): void{
    this.router.navigate(["/"]);
  }
}
