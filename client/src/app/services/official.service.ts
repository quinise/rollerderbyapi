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

  getOfficials(filterString: string): Observable<Official[]> {
    let url = this.rootURL + '/officials';
    if (filterString !== "") {
      url += "/?criteria=" + encodeURIComponent(filterString);
    }

    return this.httpClient.get(url).pipe(map((response) => (response as OfficialData).data as Official[]));
  }
}
