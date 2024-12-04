import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {NurseComponent} from '../../nurses/ope/NurseOpe/nurse.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatIconButton} from '@angular/material/button';
import {BehaviorSubject, debounceTime, distinctUntilChanged} from 'rxjs';
import PersonnelOpeInfo from '../../../models/ope/PersonnelOpeInfo';
import {Router} from '@angular/router';
import {TcaeService} from '../../../services/tcae.service';
import {TcaeComponent} from './tcae/tcae.component';

@Component({
  selector: 'app-tcae-ope',
  standalone: true,
  imports: [
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    NurseComponent,
    MatProgressSpinnerModule,
    MatIconButton,
    TcaeComponent
  ],
  templateUrl: './tcae-ope.component.html',
  styleUrl: './tcae-ope.component.css',
  encapsulation: ViewEncapsulation.None
})
export class TcaeOpeComponent implements OnInit{
  tcaes = new BehaviorSubject<PersonnelOpeInfo[]>([]);
  searchControl = new FormControl<string>("");
  loading = new BehaviorSubject<boolean>(false);

  constructor(
    private tcaeService: TcaeService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.searchControl.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged()
      )
      .subscribe((value) => {
        this.loading.next(true);
        if(value && value.trim()!=""){
          this.tcaeService.getOpeTcaes$(value).subscribe(
            data => {
              this.loading.next(false);
              this.tcaes.next(data);
            }
          );
        }else{
          this.tcaes.next([]);
          this.loading.next(false);
        }
      });
  }

  onBackClick(): void{
    this.router.navigate(["/tcaes"]);
  }
}
