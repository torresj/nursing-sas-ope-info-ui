import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {BehaviorSubject, debounceTime, distinctUntilChanged} from 'rxjs';
import PersonnelBolsaInfo from '../../../models/PersonnelBolsaInfo';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import {AsyncPipe} from '@angular/common';
import {MatFormField, MatLabel, MatSuffix} from '@angular/material/form-field';
import {MatIcon} from '@angular/material/icon';
import {MatIconButton} from '@angular/material/button';
import {MatInput} from '@angular/material/input';
import {MatProgressSpinner} from '@angular/material/progress-spinner';
import {NurseComponent} from '../../nurses/nurse/nurse.component';
import {TcaeService} from '../../../services/tcae.service';
import {TcaeComponent} from './tcae/tcae.component';

@Component({
  selector: 'app-tcae-bolsa',
  standalone: true,
  imports: [
    AsyncPipe,
    FormsModule,
    MatFormField,
    MatIcon,
    MatIconButton,
    MatInput,
    MatLabel,
    MatProgressSpinner,
    MatSuffix,
    NurseComponent,
    ReactiveFormsModule,
    NurseComponent,
    TcaeComponent
  ],
  templateUrl: './tcae-bolsa.component.html',
  styleUrl: './tcae-bolsa.component.css',
  encapsulation: ViewEncapsulation.None
})
export class TcaeBolsaComponent implements OnInit{
  tcaes = new BehaviorSubject<PersonnelBolsaInfo[]>([]);
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
          this.tcaeService.getBolsaTcaes$(value).subscribe(
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
