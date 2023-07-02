import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RulesInterface } from '../types/rules.interface';

@Injectable({
  providedIn: 'root'
})
export class RulesService {
  rootURL = 'http://localhost:3000/api';

  constructor(private httpClient: HttpClient) { }

  getRulesData() {
    let rules: RulesInterface[] = [];
    
    this.httpClient.get(this.rootURL + '/rules')
    .subscribe((response: any) => {
      rules = response.data.map((data: any) => {
        let ruleSet: RulesInterface = {
          _id: data._id,
          description: data.description,
          game_parameters_and_safety: data.game_parameters_and_safety,
          gameplay: data.gameplay,
          scoring: data.scoring,
          penalties: data.penalties,
          officiating: data.officiating,
          gear: data.gear
        };

        rules.push(ruleSet);
      })
    });
    return rules;
  }
}
