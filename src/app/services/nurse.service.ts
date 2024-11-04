import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import NurseOpeInfo from '../models/ope/NurseOpeInfo';
import NurseBolsaInfo from '../models/bolsa/NurseBolsaInfo';

@Injectable({
  providedIn: 'root'
})
export class NurseService {

  constructor(private http: HttpClient) { }

  getOpeNurses$(filter: string): Observable<NurseOpeInfo[]> {
    return this.http.get<NurseOpeInfo[]>(`https://api.sas.info.torresj.com/v1/nurses/ope?filter=${filter}`);
  }

  getBolsaNurses$(filter: string): Observable<NurseBolsaInfo[]> {
    return this.http.get<NurseBolsaInfo[]>(`https://api.sas.info.torresj.com/v1/nurses/bolsa?filter=${filter}`);
  }
}
