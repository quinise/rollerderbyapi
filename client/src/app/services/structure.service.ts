import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StructureInterface } from '../types/structure.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StructureService {

  constructor(private http:HttpClient) {}
  rootURL = 'http://localhost:3000/api';

getStructureData(): Observable<StructureInterface[]> {
    return this.http.get<StructureInterface[]>(this.rootURL + '/structure').pipe(
      map((structures: StructureInterface[]) => {
        return structures.map(structure => ({
          id: structure.id,
          banked_track: structure.banked_track,
          flat_track: structure.flat_track
        }))
    }));
  }

  // getStructureData(): Observable<StructureInterface[]> {
  //   return this.http.get<StructureInterface[]>(this.rootURL + '/structure').pipe(
  //     map((structures: StructureInterface[]) => {
  //       return structures.map(structure => ({
  //         id: structure.id,
  //         banked_track: structure.banked_track,
  //         flat_track: structure.flat_track
  //       }))
  //   }));
}