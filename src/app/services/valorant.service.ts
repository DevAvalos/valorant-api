import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValorantService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getAgentes(): Observable<any> {
    return this.http.get(`${this.apiUrl}/agentes`);
  }

  getMapas(): Observable<any> {
    return this.http.get(`${this.apiUrl}/mapas`);
  }

  getArmas(): Observable<any> {
    return this.http.get(`${this.apiUrl}/armas`);
  }

  getRangos(): Observable<any> {
    return this.http.get(`${this.apiUrl}/rangos`);
  }
}
