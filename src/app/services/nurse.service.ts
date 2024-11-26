import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import NurseOpeInfo from '../models/ope/NurseOpeInfo';
import NurseBolsaInfo from '../models/bolsa/specific/NurseBolsaInfo';
import AreaNurseBolsaInfo from '../models/bolsa/area/AreaNurseBolsaInfo';

@Injectable({
  providedIn: 'root'
})
export class NurseService {

  constructor(private http: HttpClient) { }

  getOpeNurses$(filter: string): Observable<NurseOpeInfo[]> {
    return this.http.get<NurseOpeInfo[]>(`https://api.infosas.es/v1/nurses/ope?filter=${filter}`);
  }

  getBolsaNurses$(filter: string): Observable<NurseBolsaInfo[]> {
    return this.http.get<NurseBolsaInfo[]>(`https://api.infosas.es/v1/nurses/bolsa?filter=${filter}`);
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

  getWorkNurses$(filter: string): Observable<NurseBolsaInfo[]> {
    return this.http.get<NurseBolsaInfo[]>(`https://api.infosas.es/v1/nurses/bolsa/work?filter=${filter}`);
  }

  getMentalNurses$(filter: string): Observable<NurseBolsaInfo[]> {
    return this.http.get<NurseBolsaInfo[]>(`https://api.infosas.es/v1/nurses/bolsa/mental/specific?filter=${filter}`);
  }

  getGyneNurses$(filter: string): Observable<NurseBolsaInfo[]> {
    return this.http.get<NurseBolsaInfo[]>(`https://api.infosas.es/v1/nurses/bolsa/gyne?filter=${filter}`);
  }

  getFamilyNurses$(filter: string): Observable<NurseBolsaInfo[]> {
    return this.http.get<NurseBolsaInfo[]>(`https://api.infosas.es/v1/nurses/bolsa/family?filter=${filter}`);
  }

  getPediatricianNurses$(filter: string): Observable<NurseBolsaInfo[]> {
    return this.http.get<NurseBolsaInfo[]>(`https://api.infosas.es/v1/nurses/bolsa/pediatrician?filter=${filter}`);
  }
}
