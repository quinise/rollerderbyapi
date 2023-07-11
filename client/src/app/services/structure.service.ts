import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StructureInterface } from '../types/structure.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface StructureData { 
  data: StructureInterface[];
}
@Injectable({
  providedIn: 'root'
})
export class StructureService {
  rootURL = 'http://localhost:3000/api';

  constructor(private httpClient: HttpClient) { }

  getStructures(): Observable<StructureInterface[]> {
    return this.httpClient.get(this.rootURL + '/structure').pipe(map((response) => (response as StructureData).data as StructureInterface[]));
  }
}