import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';
import {NurseService} from '../../../services/nurse.service';
import {BehaviorSubject, debounceTime, distinctUntilChanged} from 'rxjs';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AsyncPipe} from '@angular/common';
import {MatFormField, MatLabel, MatSuffix} from '@angular/material/form-field';
import {MatIcon} from '@angular/material/icon';
import {MatIconButton} from '@angular/material/button';
import {MatInput} from '@angular/material/input';
import {MatProgressSpinner} from '@angular/material/progress-spinner';
import {NurseComponent} from '../../nurse/nurse.component';
import AreaNurseBolsaInfo from '../../../models/bolsa/area/AreaNurseBolsaInfo';
import {AreaNurseComponent} from '../../area-nurse/area-nurse.component';

@Component({
  selector: 'app-nuclear',
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
    AreaNurseComponent
  ],
  templateUrl: './nuclear.component.html',
  styleUrl: './nuclear.component.css',
  encapsulation: ViewEncapsulation.None
})
export class NuclearComponent implements OnInit{
  nurses = new BehaviorSubject<AreaNurseBolsaInfo[]>([]);
  searchControl = new FormControl<string>("");
  loading = new BehaviorSubject<boolean>(false);

  constructor(
    private nurseService: NurseService,
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
          this.nurseService.getNuclearNurses$(value).subscribe(
            data => {
              this.loading.next(false);
              this.nurses.next(data);
            }
          );
        }else{
          this.nurses.next([]);
          this.loading.next(false);
        }
      });
  }

  onBackClick(): void{
    this.router.navigate(["/"]);
  }
}
