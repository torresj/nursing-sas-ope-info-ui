import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import MemberInfo from '../models/MemberInfo';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private http: HttpClient) { }

  getMembers$(filter: string): Observable<MemberInfo[]> {
    return this.http.get<MemberInfo[]>(`https://api.sas.info.torresj.com/v1/nurses/ope?filter=${filter}`);
  }
}
