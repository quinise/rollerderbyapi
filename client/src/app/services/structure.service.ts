import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StructureInterface } from '../types/structure.interface';

@Injectable({
  providedIn: 'root'
})
export class StructureService {
  rootURL = 'http://localhost:3000/api';

  constructor(private httpClient: HttpClient) { }

  getStructureData() {
    let structures: StructureInterface[] = [];

    this.httpClient.get(this.rootURL + '/structure')
      .subscribe((response: any) => {
        structures = response.data.map((data: any) => {
          let structure: StructureInterface = {
            _id: data._id,
            modern_banked_track: data.modern_banked_track,
            flat_track: data.flat_track
          };

          structures.push(structure);
        })
      });
      return structures;
  }
}