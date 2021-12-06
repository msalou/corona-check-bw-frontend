import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoronaFormularService {

  private URL = 'http://localhost:8080';      // ToDo: Refactor hardcoded URL

  constructor(private httpClient: HttpClient) {}

  getCurrentAlarmstufe() {
    return this.httpClient
      .get(this.URL + '/getCurrentAlarmstufe');
  }

  getLebensbereiche() {
    return this.httpClient
      .get(this.URL + '/getLebensbereiche');
  }

  getMassnahmeByLebensbereich(selectedLebensbereichId: number) {
    return this.httpClient
      .get(this.URL + '/getMassnahmeByLebensbereich/' + selectedLebensbereichId);
  }

}
