// The code in this file provides the app with Officials collection data from the Roller Derby API.
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Official } from '../types/officials';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class OfficialService {
  rootURL = 'https://us-central1-rollerderbyapi.cloudfunctions.net/api';

  constructor(private httpClient: HttpClient) { }

  getOfficials(filterString: string): Observable<Official[]> {
    let url = this.rootURL + '/officials';
    if (filterString !== "") {
      url += "/?criteria=" + encodeURIComponent(filterString);
    }

    return this.httpClient.get(url).pipe(map((response) => response as Official[]));
  }
}
