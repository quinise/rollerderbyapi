import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RulesInterface } from 'src/app/types/rules.interface';
import { RulesService } from 'src/app/services/rules.service';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.css']
})
export class RulesComponent implements OnInit {
  rules: RulesInterface[] = [];

  constructor(private http: HttpClient, private rulesService: RulesService) {}  
  
  ngOnInit(): void {
    this.rulesService.getRules().subscribe(data => this.rules.push(data));
  }
}
