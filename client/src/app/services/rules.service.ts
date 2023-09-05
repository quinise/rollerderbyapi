// The code in this file provides the app with Rules collection data from the Roller Derby API.
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RulesInterface } from '../types/rules.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RulesService {
  rootURL = 'https://us-central1-rollerderbyapi.cloudfunctions.net/api';

  constructor(private httpClient: HttpClient) { }

  getRules(): Observable<RulesInterface>{
    return this.httpClient.get(this.rootURL + '/rules').pipe(map((response) => (response as RulesInterface)));
  }
}