import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Alarmstufe } from '../models/Alarmstufe';

@Injectable({
  providedIn: 'root'
})
export class CoronaFormularService {

  constructor(private httpClient: HttpClient) {}

  getCurrentAlarmstufe() {
    return this.httpClient
      .get('http://localhost:8080/getCurrentAlarmstufe'); // ToDo: Refactor hardcoded URL
  }

}
