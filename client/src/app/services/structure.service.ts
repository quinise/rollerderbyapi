// The code in this file provides the app with structure collection data from the Roller Derby API.
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StructureInterface } from '../types/structure.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StructureService {
  rootURL = 'https://us-central1-rollerderbyapi.cloudfunctions.net/api';

  constructor(private httpClient: HttpClient) { }

  getStructures(): Observable<StructureInterface> {
    return this.httpClient.get(this.rootURL + '/structure').pipe(map((response) => (response as StructureInterface)));
  }
}