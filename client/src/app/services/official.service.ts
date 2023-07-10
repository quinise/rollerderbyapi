import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Official } from '../types/officials';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface OfficialData { 
  data: Official[];
}

@Injectable({
  providedIn: 'root'
})
export class OfficialService {
  rootURL = 'http://localhost:3000/api';

  constructor(private httpClient: HttpClient) { }

  getOfficials(): Observable<Official[]> {
    return this.httpClient.get(this.rootURL + '/officials').pipe(map((response) => (response as OfficialData).data as Official[]));
  }
}
