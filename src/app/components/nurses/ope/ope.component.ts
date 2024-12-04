import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, FormControl, ReactiveFormsModule } from "@angular/forms";
import { BehaviorSubject, debounceTime, distinctUntilChanged } from 'rxjs';
import {NurseComponent} from './NurseOpe/nurse.component';
import PersonnelOpeInfo from '../../../models/ope/PersonnelOpeInfo';
import {NurseService} from '../../../services/nurse.service';
import {MatIconButton} from '@angular/material/button';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ope',
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
    MatIconButton
  ],
  templateUrl: './ope.component.html',
  styleUrl: './ope.component.css',
  encapsulation: ViewEncapsulation.None
})
export class OpeComponent implements OnInit{
  nurses = new BehaviorSubject<PersonnelOpeInfo[]>([]);
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
          this.nurseService.getOpeNurses$(value).subscribe(
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
    this.router.navigate(["/nurses"]);
  }
}
