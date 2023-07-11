import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RulesInterface } from '../types/rules.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface RulesData { 
  data: RulesInterface[];
}

@Injectable({
  providedIn: 'root'
})
export class RulesService {
  rootURL = 'http://localhost:3000/api';

  constructor(private httpClient: HttpClient) { }
  
  getRules(): Observable<RulesInterface[]> {
      return this.httpClient.get(this.rootURL + '/rules').pipe(map((response) => (response as RulesData).data as RulesInterface[]));
    }
  }

  // getRulesData() {
  //   let rules: RulesInterface[] = [];
    
  //   this.httpClient.get(this.rootURL + '/rules')
  //   .subscribe((response: any) => {
  //     rules = response.data.map((data: any) => {
  //       let ruleSet: RulesInterface = {
  //         _id: data._id,
  //         description: data.description,
  //         game_parameters_and_safety: data.game_parameters_and_safety,
  //         gameplay: data.gameplay,
  //         scoring: data.scoring,
  //         penalties: data.penalties,
  //         officiating: data.officiating,
  //         gear: data.gear
  //       };

  //       rules.push(ruleSet);
  //     })
  //   });
  //   return rules;
  // }
