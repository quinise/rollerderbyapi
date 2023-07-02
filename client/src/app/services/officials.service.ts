import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OfficialsInterface } from '../types/officials.interface'

@Injectable({
  providedIn: 'root'
})
export class OfficialsService {
  rootURL = 'http://localhost:3000/api';

  constructor(private httpClient: HttpClient) { }

  getOfficialsData() {
    let officials: OfficialsInterface[] = [];
    
    this.httpClient.get(this.rootURL + '/officials')
    .subscribe((response: any) => {
      officials = response.data.map((data: any) => {
        let official: OfficialsInterface = {
          _id: data._id,
          types: data.types,
          program_certifications: data.program_certifications,
          referees: data.referees,
          non_skating_officials: data.non_skating_officials
        };

        officials.push(official);
      })
    });
    return officials;
  }
}
