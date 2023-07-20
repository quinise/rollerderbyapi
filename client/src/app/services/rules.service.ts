import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RulesInterface } from '../types/rules.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface RulesData { 
  data: RulesInterface;
}

@Injectable({
  providedIn: 'root'
})
export class RulesService {
  rootURL = 'http://localhost:3000/api';

  constructor(private httpClient: HttpClient) { }
  
  // getRules(): Observable<RulesInterface> {
  //     return this.httpClient.get(this.rootURL + '/rules').pipe(map((response) => (response as RulesData).data as RulesInterface));
  // }

  getRules(): Observable<RulesInterface>{
    return this.httpClient.get(this.rootURL + '/rules').pipe(map((response) => (response as RulesInterface)));
}
}