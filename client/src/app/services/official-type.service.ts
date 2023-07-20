import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OfficialTypeInterface } from '../types/officialType.interface'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OfficialTypeService {
  rootURL = 'http://localhost:3000/api';

  constructor(private httpClient: HttpClient) { }
  
  getOfficialTypes(): Observable<OfficialTypeInterface> {
    return this.httpClient.get(this.rootURL + '/officialTypes').pipe(map((response) => response as OfficialTypeInterface));
  }
}
