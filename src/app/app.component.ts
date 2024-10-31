import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, FormControl, ReactiveFormsModule } from "@angular/forms";
import { BehaviorSubject, debounceTime, distinctUntilChanged } from 'rxjs';
import MemberInfo from './models/MemberInfo';
import { MemberService } from './services/member.service';
import { MemberComponent } from './components/member/member.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MemberComponent,
    MatProgressSpinnerModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit{
  members = new BehaviorSubject<MemberInfo[]>([]);
  searchControl = new FormControl<string>("");
  loading = new BehaviorSubject<boolean>(false);

  constructor(private memberService: MemberService){}

  ngOnInit(): void {
    this.searchControl.valueChanges
    .pipe(
      debounceTime(500),
      distinctUntilChanged()
    )
    .subscribe((value) => {
      this.loading.next(true);
      if(value && value.trim()!=""){
        this.memberService.getMembers$(value).subscribe(
          data => {
            this.loading.next(false);
            this.members.next(data);
          }
        );
      }else{
        this.members.next([]);
        this.loading.next(false);
      }
    });

  }
}
