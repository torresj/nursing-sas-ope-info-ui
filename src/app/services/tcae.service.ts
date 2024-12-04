import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import PersonnelOpeInfo from '../models/ope/PersonnelOpeInfo';
import PersonnelBolsaInfo from '../models/PersonnelBolsaInfo';
import AreaNurseBolsaInfo from '../models/bolsa/area/AreaNurseBolsaInfo';

@Injectable({
  providedIn: 'root'
})
export class TcaeService {

  constructor(private http: HttpClient) { }

  getOpeTcaes$(filter: string): Observable<PersonnelOpeInfo[]> {
    return this.http.get<PersonnelOpeInfo[]>(`https://api.infosas.es/v1/tcaes/ope?filter=${filter}`);
  }

  getBolsaTcaes$(filter: string): Observable<PersonnelBolsaInfo[]> {
    return this.http.get<PersonnelBolsaInfo[]>(`https://api.infosas.es/v1/tcaes/bolsa?filter=${filter}`);
  }
}
