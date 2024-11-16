import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AsyncPipe} from "@angular/common";
import {FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormField, MatLabel, MatSuffix} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {MatInput} from "@angular/material/input";
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {NurseComponent} from '../../nurse/nurse.component';
import {BehaviorSubject, debounceTime, distinctUntilChanged} from 'rxjs';
import NurseBolsaInfo from '../../../models/bolsa/specific/NurseBolsaInfo';
import {NurseService} from '../../../services/nurse.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-gyne',
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
        ReactiveFormsModule
    ],
  templateUrl: './gyne.component.html',
  styleUrl: './gyne.component.css',
  encapsulation: ViewEncapsulation.None
})
export class GyneComponent implements OnInit{
  nurses = new BehaviorSubject<NurseBolsaInfo[]>([]);
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
          this.nurseService.getGyneNurses$(value).subscribe(
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
