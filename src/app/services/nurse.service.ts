import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import PersonnelOpeInfo from '../models/ope/PersonnelOpeInfo';
import PersonnelBolsaInfo from '../models/PersonnelBolsaInfo';
import AreaNurseBolsaInfo from '../models/bolsa/area/AreaNurseBolsaInfo';

@Injectable({
  providedIn: 'root'
})
export class NurseService {

  constructor(private http: HttpClient) { }

  getOpeNurses$(filter: string): Observable<PersonnelOpeInfo[]> {
    return this.http.get<PersonnelOpeInfo[]>(`https://api.infosas.es/v1/nurses/ope?filter=${filter}`);
  }

  getBolsaNurses$(filter: string): Observable<PersonnelBolsaInfo[]> {
    return this.http.get<PersonnelBolsaInfo[]>(`https://api.infosas.es/v1/nurses/bolsa?filter=${filter}`);
  }

  getCriticsNurses$(filter: string): Observable<AreaNurseBolsaInfo[]> {
    return this.http.get<AreaNurseBolsaInfo[]>(`https://api.infosas.es/v1/nurses/bolsa/critics?filter=${filter}`);
  }

  getDialysisNurses$(filter: string): Observable<AreaNurseBolsaInfo[]> {
    return this.http.get<AreaNurseBolsaInfo[]>(`https://api.infosas.es/v1/nurses/bolsa/dialysis?filter=${filter}`);
  }

  getNuclearNurses$(filter: string): Observable<AreaNurseBolsaInfo[]> {
    return this.http.get<AreaNurseBolsaInfo[]>(`https://api.infosas.es/v1/nurses/bolsa/nuclear?filter=${filter}`);
  }

  getNeonatesNurses$(filter: string): Observable<AreaNurseBolsaInfo[]> {
    return this.http.get<AreaNurseBolsaInfo[]>(`https://api.infosas.es/v1/nurses/bolsa/neonates?filter=${filter}`);
  }

  getSurgeryRoomNurses$(filter: string): Observable<AreaNurseBolsaInfo[]> {
    return this.http.get<AreaNurseBolsaInfo[]>(`https://api.infosas.es/v1/nurses/bolsa/surgery?filter=${filter}`);
  }

  getMentalHealthNurses$(filter: string): Observable<AreaNurseBolsaInfo[]> {
    return this.http.get<AreaNurseBolsaInfo[]>(`https://api.infosas.es/v1/nurses/bolsa/mental?filter=${filter}`);
  }

  getWorkNurses$(filter: string): Observable<PersonnelBolsaInfo[]> {
    return this.http.get<PersonnelBolsaInfo[]>(`https://api.infosas.es/v1/nurses/bolsa/work?filter=${filter}`);
  }

  getMentalNurses$(filter: string): Observable<PersonnelBolsaInfo[]> {
    return this.http.get<PersonnelBolsaInfo[]>(`https://api.infosas.es/v1/nurses/bolsa/mental/specific?filter=${filter}`);
  }

  getGyneNurses$(filter: string): Observable<PersonnelBolsaInfo[]> {
    return this.http.get<PersonnelBolsaInfo[]>(`https://api.infosas.es/v1/nurses/bolsa/gyne?filter=${filter}`);
  }

  getFamilyNurses$(filter: string): Observable<PersonnelBolsaInfo[]> {
    return this.http.get<PersonnelBolsaInfo[]>(`https://api.infosas.es/v1/nurses/bolsa/family?filter=${filter}`);
  }

  getPediatricianNurses$(filter: string): Observable<PersonnelBolsaInfo[]> {
    return this.http.get<PersonnelBolsaInfo[]>(`https://api.infosas.es/v1/nurses/bolsa/pediatrician?filter=${filter}`);
  }
}
